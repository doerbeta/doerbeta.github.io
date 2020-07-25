var getData = fetch('./data/pubs.xlsx')
  .then((response) => {
    // return response.json();
    if (!response.ok) throw new Error("fetch failed");
    return response.arrayBuffer();
  })
  .then((ab) => {
    var data = new Uint8Array(ab);
    var workbook = XLSX.read(data, {
      type: "array"
    });
    var first_sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[first_sheet_name];
    var jsondata = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    // console.log(jsondata);
    renderPubs(jsondata);
  });

function renderPubs(arr) {
  var container = document.querySelector("#pubs_container");
  const startyear = 2015;
  const currentyear = new Date().getFullYear();

  var J = 0; // journals
  var C = 0; // conferences
  var E = 0; // extended abstracts
  var P = 0; // preprints

  // add yearly publication summary
  for (var yr = startyear; yr <= currentyear; yr++) {
    ys = yearSummary(arr, J, C, E, P, yr)
    J = ys['J'];
    C = ys['C'];
    E = ys['E'];
    P = ys['P'];
    container.innerHTML = ys['html'] + container.innerHTML;
  }

  // add ongoing publication summary
  ys = yearSummary(arr, J, C, E, P, -1)
  container.innerHTML = ys['html'] + container.innerHTML;

  // add citation summary
  container.innerHTML = citeSummary(arr, ys['J'], ys['C'], ys['E'], ys['P']) + container.innerHTML;

  // console.log(container);

  var collall = document.getElementById("expall");
  collall.addEventListener("click", function () {
    this.classList.toggle("active");
    if (collall.innerHTML == "collapse all abstracts") {
      collall.innerHTML = "expand all abstracts";
    } else {
      collall.innerHTML = "collapse all abstracts";
    }
    let contents = document.querySelectorAll(".abstract");
    // var colls = document.getElementsByClassName("collapsible");
    // for (let j = 0; j < colls.length; i++) {
    for (let j = 0; j < contents.length; j++) {
      // colls[j].setAttribute("clicked",true);
      // colls[j].click();
      // var content = colls[j].nextElementSibling;
      if (contents[j].style.maxHeight) {
        contents[j].style.maxHeight = null;
      } else {
        contents[j].style.maxHeight = contents[j].scrollHeight + "px";
      }
    }
  });


  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

}

function citeSummary(arr, J, C, E, P) {
  var citations = arr
    .filter((item) => {
      return item['cite'];
    })
    .map((item) => {
      return item['cite'];
    })
    .reduce((a, b) => {
      return a + b;
    })
  return `<p class="mb-5 text-primary"> <b>Types: </b> peer-reviewed journals <b>(J)</b>, peer-reviewed conference proceedings <b>(C)</b>, peer-reviewed extended abstracts <b>(E)</b>, arXiv preprints / manuscripts <b>(P)</b>.  &nbsp;
  <br />
  <br /> <b>${(J + C + E + P)}</b> total = <b>${J}</b> J + <b>${C}</b> C + <b>${E}</b> E + <b>${P}</b> P, with <a href="https://scholar.google.com/citations?user=H67KJ4cAAAAJ&hl=en">${citations}</a> citations. &nbsp;
  <br />
  <br /> Feel free to click on <b> abstract </b> to learn more, or [&nbsp;<a style="color:#268fd6;" class="collapsibleall" id="expall">expand all abstracts </a>&nbsp;] &nbsp; </p>`;
}

function yearSummary(arr, J, C, E, P, yr) {
  var content = arr
    .filter((item) => {
      if (yr == -1) {
        return item['display'] && (!item['year']);
      } else {
        return item['display'] && item['year'] == yr;
      }
    })
    .sort((a, b) => {
      return a['month'] - b['month'];
    })
    .map((item) => {
      var count = -1;
      if (item['type'] == 'J') { J++; count = J; }
      if (item['type'] == 'C') { C++; count = C; }
      if (item['type'] == 'E') { E++; count = E; }
      if (item['type'] == 'P') { P++; count = P; }
      return `<li>
      <div class="row">
      <div class="imgcolumn">
      <img class="rounded-corner" style="width:100%;border-radius:10%;border:2px solid dimgrey;" src="./img/publications/${item['image']}" alt="${item['id']}" >
      </div>
      <div class="textcolumn">
          [${item['type'] + count}]&nbsp;<b class="text-primary" id="${item['id']}"> ${item['title']} </b>
          <br />
          ${item['authors'].replace(/Baihan Lin/gi, '<b><span style="color: dimgray;">Baihan Lin</span></b>')}
          <br />
          <br />
          <p style="color:black"> ${item['venue']} </p>
          ${item['arxiv'] ? `[ <a href="${item['arxiv']}">arXiv</a> ]&nbsp;` : ``}
          ${item['pdf'] ? `[ <a href="./pdfs/${item['pdf']}">pdf</a> ]&nbsp;` : ``}
          ${item['link'] ? `[  <a href="${item['link']}">${item['linkname'] ? item['linkname'] : 'link'}</a> ]&nbsp;` : ``}
          ${item['poster'] ? `[ <a href="./pdfs/${item['poster']}">poster</a> ]&nbsp;` : ``}
          ${item['bibtex'] ? `[ <a href="./bibTex/${item['bibtex']}">bibTex</a> ]&nbsp;` : ``}
          ${item['code'] ? `[  <a href="${item['code']}">code</a> ]&nbsp;` : ``}
          ${item['demo'] ? `[  <a href="${item['demo']}">demo</a> ]&nbsp;` : ``}
          ${item['video'] ? `[  <a href="${item['video']}">video</a> ]&nbsp;` : ``}
          ${item['slides'] ? `[ <a href="./pdfs/${item['slides']}">slides</a> ]&nbsp;` : ``}
          ${item['abstract'] ? `[  <a  style="color:#268fd6;" class="collapsible">abstract&nbsp;</a> ] <div class="abstract rounded-corner"> <p> ${item['abstract']}  </p></div>` : ``} 
          ${item['cite'] && item['citelink'] ? `Cited by <a href="${item['citelink']}">${item['cite']}</a>` : ``}
      </div>
  </div>
  </li>
  <br />`;
    })
    .reverse()
    .join("");
  content = `<h3> ${yr == -1 ? 'ongoing...' : yr} </h3><br /><ul class="fa-ul mb-0">${content}</ul>`;
  summary = { 'html': content, 'J': J, 'C': C, 'E': E, "P": P };
  // console.log(summary)
  return summary
}

