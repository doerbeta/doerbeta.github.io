var fd_noabbr = {
  'NS': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:steelblue;" class="fd-filter" id="ns-noab">&nbsp;neuroscience&nbsp;</a>',
  'ML': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:tomato;" class="fd-filter" id="ml-noab">&nbsp;machine learning&nbsp;</a>',
  'CV': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:sandybrown;" class="fd-filter" id="cv-noab">&nbsp;computer vision&nbsp;</a>',
  'GT': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:mediumpurple;" class="fd-filter" id="gt-noab">&nbsp;geometry & topology&nbsp;</a>',
  'SB': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:seagreen;" class="fd-filter" id="sb-noab">&nbsp;systems biology&nbsp;</a>',
  'SP': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:plum;" class="fd-filter" id="sp-noab">&nbsp;speech processing&nbsp;</a>',
  'AM': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:skyblue;" class="fd-filter" id="am-noab">&nbsp;applied mathematics&nbsp;</a>',
  'HCI': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:sienna;" class="fd-filter" id="hci-noab">&nbsp;human-computer interaction&nbsp;</a>',
  'IT': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:orange;" class="fd-filter" id="it-noab">&nbsp;information theory&nbsp;</a>',
  'TM': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:salmon;" class="fd-filter" id="tm-noab">&nbsp;translational medicine&nbsp;</a>',
  'SA': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="fd-filter" id="sa-noab">&nbsp;show all&nbsp;</a>'
};

var fd_abbr = {
  'NS': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:steelblue;" class="fd-filter" id="ns-ab">&nbsp;NS&nbsp;</a>',
  'ML': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:tomato;" class="fd-filter" id="ml-ab">&nbsp;ML&nbsp;</a>',
  'CV': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:sandybrown;" class="fd-filter" id="cv-ab">&nbsp;CV&nbsp;</a>',
  'GT': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:mediumpurple;" class="fd-filter" id="gt-ab">&nbsp;GT&nbsp;</a>',
  'SB': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:seagreen;" class="fd-filter" id="sb-ab">&nbsp;SB&nbsp;</a>',
  'SP': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:plum;" class="fd-filter" id="sp-ab">&nbsp;SP&nbsp;</a>',
  'AM': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:skyblue;" class="fd-filter" id="am-ab">&nbsp;AM&nbsp;</a>',
  'HCI': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:sienna;" class="fd-filter" id="hci-ab">&nbsp;HCI&nbsp;</a>',
  'IT': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:orange;" class="fd-filter" id="it-ab">&nbsp;IT&nbsp;</a>',
  'TM': '<a style="border-radius:4px;padding:1px;color:white;font-size:90%;background-color:salmon;" class="fd-filter" id="tm-ab">&nbsp;TM&nbsp;</a>',
  'SA': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="fd-filter" id="sa-ab">&nbsp;SA&nbsp;</a>'
};

var fd_noabbr_flipped = {
  'NS': '<a style="border-radius:4px;padding:1px;color:steelblue;font-size:90%;background-color:white;" class="fd-filter" id="ns-noab-fp">&nbsp;neuroscience&nbsp;</a>',
  'ML': '<a style="border-radius:4px;padding:1px;color:tomato;font-size:90%;background-color:white;" class="fd-filter" id="ml-noab-fp">&nbsp;machine learning&nbsp;</a>',
  'CV': '<a style="border-radius:4px;padding:1px;color:sandybrown;font-size:90%;background-color:white;" class="fd-filter" id="cv-noab-fp">&nbsp;computer vision&nbsp;</a>',
  'GT': '<a style="border-radius:4px;padding:1px;color:mediumpurple;font-size:90%;background-color:white;" class="fd-filter" id="gt-noab-fp">&nbsp;geometry & topology&nbsp;</a>',
  'SB': '<a style="border-radius:4px;padding:1px;color:seagreen;font-size:90%;background-color:white;" class="fd-filter" id="sb-noab-fp">&nbsp;systems biology&nbsp;</a>',
  'SP': '<a style="border-radius:4px;padding:1px;color:plum;font-size:90%;background-color:white;" class="fd-filter" id="sp-noab-fp">&nbsp;speech processing&nbsp;</a>',
  'AM': '<a style="border-radius:4px;padding:1px;color:skyblue;font-size:90%;background-color:white;" class="fd-filter" id="am-noab-fp">&nbsp;applied mathematics&nbsp;</a>',
  'HCI': '<a style="border-radius:4px;padding:1px;color:sienna;font-size:90%;background-color:white;" class="fd-filter" id="hci-noab-fp">&nbsp;human-computer interaction&nbsp;</a>',
  'IT': '<a style="border-radius:4px;padding:1px;color:orange;font-size:90%;background-color:white;" class="fd-filter" id="it-noab-fp">&nbsp;information theory&nbsp;</a>',
  'TM': '<a style="border-radius:4px;padding:1px;color:salmon;font-size:90%;background-color:white;" class="fd-filter" id="tm-noab-fp">&nbsp;translational medicine&nbsp;</a>',
  'SA': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="fd-filter" id="sa-noab-fp">&nbsp;show all&nbsp;</a>'
};

var fd_abbr_flipped = {
  'NS': '<a style="border-radius:4px;padding:1px;color:steelblue;font-size:90%;background-color:white;" class="fd-filter" id="ns-ab-fp">&nbsp;NS&nbsp;</a>',
  'ML': '<a style="border-radius:4px;padding:1px;color:tomato;font-size:90%;background-color:white;" class="fd-filter" id="ml-ab-fp">&nbsp;ML&nbsp;</a>',
  'CV': '<a style="border-radius:4px;padding:1px;color:sandybrown;font-size:90%;background-color:white;" class="fd-filter" id="cv-ab-fp">&nbsp;CV&nbsp;</a>',
  'GT': '<a style="border-radius:4px;padding:1px;color:mediumpurple;font-size:90%;background-color:white;" class="fd-filter" id="gt-ab-fp">&nbsp;GT&nbsp;</a>',
  'SB': '<a style="border-radius:4px;padding:1px;color:seagreen;font-size:90%;background-color:white;" class="fd-filter" id="sb-ab-fp">&nbsp;SB&nbsp;</a>',
  'SP': '<a style="border-radius:4px;padding:1px;color:plum;font-size:90%;background-color:white;" class="fd-filter" id="sp-ab-fp">&nbsp;SP&nbsp;</a>',
  'AM': '<a style="border-radius:4px;padding:1px;color:skyblue;font-size:90%;background-color:white;" class="fd-filter" id="am-ab-fp">&nbsp;AM&nbsp;</a>',
  'HCI': '<a style="border-radius:4px;padding:1px;color:sienna;font-size:90%;background-color:white;" class="fd-filter" id="hci-ab-fp">&nbsp;HCI&nbsp;</a>',
  'IT': '<a style="border-radius:4px;padding:1px;color:orange;font-size:90%;background-color:white;" class="fd-filter" id="it-ab-fp">&nbsp;IT&nbsp;</a>',
  'TM': '<a style="border-radius:4px;padding:1px;color:salmon;font-size:90%;background-color:white;" class="fd-filter" id="tm-ab-fp">&nbsp;TM&nbsp;</a>',
  'SA': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="fd-filter" id="sa-ab-fp">&nbsp;SA&nbsp;</a>'
};

var tp_abbr = {
  'J': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="tp-filter" id="j-ab">&nbsp;J&nbsp;</a>',
  'C': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="tp-filter" id="c-ab">&nbsp;C&nbsp;</a>',
  'E': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="tp-filter" id="e-ab">&nbsp;E&nbsp;</a>',
  'P': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="tp-filter" id="p-ab">&nbsp;P&nbsp;</a>',
  'S': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="tp-filter" id="s-ab">&nbsp;all&nbsp;</a>'
};

var tp_abbr_flipped = {
  'J': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="tp-filter" id="j-ab-fp">&nbsp;J&nbsp;</a>',
  'C': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="tp-filter" id="c-ab-fp">&nbsp;C&nbsp;</a>',
  'E': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="tp-filter" id="e-ab-fp">&nbsp;E&nbsp;</a>',
  'P': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="tp-filter" id="p-ab-fp">&nbsp;P&nbsp;</a>',
  'S': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="tp-filter" id="s-ab-fp">&nbsp;all&nbsp;</a>'
};

var tp_noabbr = {
  'J': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="tp-filter" id="j-noab">&nbsp;peer-reviewed <b>J</b>ournals&nbsp;</a>',
  'C': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="tp-filter" id="c-noab">&nbsp;peer-reviewed <b>C</b>onference proceedings&nbsp;</a>',
  'E': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="tp-filter" id="e-noab">&nbsp;peer-reviewed <b>E</b>xtended abstracts&nbsp;</a>',
  'P': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="tp-filter" id="p-noab">&nbsp;arXiv <b>P</b>reprints / manuscripts&nbsp;</a>',
  'S': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="tp-filter" id="s-noab">&nbsp;total&nbsp;</a>'
};

var tp_noabbr_flipped = {
  'J': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="tp-filter" id="j-noab-fp">&nbsp;peer-reviewed <b>J</b>ournals&nbsp;</a>',
  'C': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="tp-filter" id="c-noab-fp">&nbsp;peer-reviewed <b>C</b>onference proceedings&nbsp;</a>',
  'E': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="tp-filter" id="e-noab-fp">&nbsp;peer-reviewed <b>E</b>xtended abstracts&nbsp;</a>',
  'P': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="tp-filter" id="p-noab-fp">&nbsp;arXiv <b>P</b>reprints / manuscripts&nbsp;</a>',
  'S': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="tp-filter" id="s-noab-fp">&nbsp;total&nbsp;</a>'
};

var vn_noabbr = {
  'IJCAI': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="vn-filter" id="ijc-noab">&nbsp;IJCAI&nbsp;</a>',
  'AAMAS': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="vn-filter" id="aam-noab">&nbsp;AAMAS&nbsp;</a>',
  'InterSpeech': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="vn-filter" id="int-noab">&nbsp;InterSpeech&nbsp;</a>',
  'ISMB': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="vn-filter" id="ism-noab">&nbsp;ISMB&nbsp;</a>',
  'CCN': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="vn-filter" id="ccn-noab">&nbsp;CCN&nbsp;</a>',
  'AJCAI': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="vn-filter" id="ajc-noab">&nbsp;AJCAI&nbsp;</a>',
  'ICDM Workshops': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="vn-filter" id="icw-noab">&nbsp;ICDM Workshops&nbsp;</a>',
  'IJCAI Workshops': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="vn-filter" id="ijw-noab">&nbsp;IJCAI Workshops&nbsp;</a>',
  'KDD Workshops': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="vn-filter" id="kdw-noab">&nbsp;KDD Workshops&nbsp;</a>',
  'NeurIPS Workshops': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="vn-filter" id="new-noab">&nbsp;NeurIPS Workshops&nbsp;</a>',
  'show all': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:gainsboro;" class="vn-filter" id="sho-noab">&nbsp;show all&nbsp;</a>'
};

var vn_noabbr_flipped = {
  'IJCAI': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="vn-filter" id="ijc-noab-fp">&nbsp;IJCAI&nbsp;</a>',
  'AAMAS': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="vn-filter" id="aam-noab-fp">&nbsp;AAMAS&nbsp;</a>',
  'InterSpeech': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="vn-filter" id="int-noab-fp">&nbsp;InterSpeech&nbsp;</a>',
  'ISMB': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="vn-filter" id="ism-noab-fp">&nbsp;ISMB&nbsp;</a>',
  'CCN': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="vn-filter" id="ccn-noab-fp">&nbsp;CCN&nbsp;</a>',
  'AJCAI': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="vn-filter" id="ajc-noab-fp">&nbsp;AJCAI&nbsp;</a>',
  'ICDM Workshops': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="vn-filter" id="icw-noab-fp">&nbsp;ICDM Workshops&nbsp;</a>',
  'IJCAI Workshops': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="vn-filter" id="ijw-noab-fp">&nbsp;IJCAI Workshops&nbsp;</a>',
  'KDD Workshops': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="vn-filter" id="kdw-noab-fp">&nbsp;KDD Workshops&nbsp;</a>',
  'NeurIPS Workshops': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="vn-filter" id="new-noab-fp">&nbsp;NeurIPS Workshops&nbsp;</a>',
  'show all': '<a style="border-radius:4px;padding:1px;color:black;font-size:90%;background-color:white;" class="vn-filter" id="sho-noab-fp">&nbsp;show all&nbsp;</a>'
};

var pubids = {};
var showvenues = true;

function getFields(fd, abbr, st) {
  if (abbr) {
    return (st) ? fd_abbr[fd] : fd_abbr_flipped[fd];
  } else {
    return (st) ? fd_noabbr[fd] : fd_noabbr_flipped[fd];
  }
}

function getTypes(tp, abbr, st) {
  if (abbr) {
    return (st) ? tp_abbr[tp] : tp_abbr_flipped[tp];
  } else {
    return (st) ? tp_noabbr[tp] : tp_noabbr_flipped[tp];
  }
}

function getVenues(vn, abbr, st) {
  return (st) ? vn_noabbr[vn] : vn_noabbr_flipped[vn];
}

var getPubsData = fetch('./data/pubs.xlsx')
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
    var pub_sheet = workbook.SheetNames[0];
    var pub_worksheet = workbook.Sheets[pub_sheet];
    var pubjson = XLSX.utils.sheet_to_json(pub_worksheet, { raw: true });

    var lab_sheet = workbook.SheetNames[1];
    var lab_worksheet = workbook.Sheets[lab_sheet];
    var labjson = XLSX.utils.sheet_to_json(lab_worksheet, { raw: true });

    renderPubs(pubjson, labjson);
  });

function renderPubs(arr, labs) {
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
  container.innerHTML = `<p class="mb-5 text-primary"> 
    <span id="filter_types"></span>
    <br /><br />
    <span id="filter_fields"></span>
    <br /><br />
    <span id="filter_venues"></span>
    <br /><br />
    Click on <b> abstract </b> to learn more, or [&nbsp;<a style="color:#268fd6;" 
    class="collapsibleall" id="expall">expand all abstracts </a>&nbsp;] &nbsp; </p>` + container.innerHTML;

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

  // add collapsibles for abstracts
  var coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
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

  // add filters by research fields
  var filter_fields_container = document.querySelector("#filter_fields");
  var fds = ['NS', 'ML', 'CV', 'GT', 'SB', 'SP', 'AM', 'HCI', 'IT', 'TM', 'SA'];
  var fdstate = Array(fds.length).fill(1);
  var fdsindex = { 'ns': 0, 'ml': 1, 'cv': 2, 'gt': 3, 'sb': 4, 'sp': 5, 'am': 6, 'hc': 7, 'it': 8, 'tm': 9, 'sa': 10 };
  var fdcount = fds.map((item) => {
    return arr.filter((x) => { return x['display'] && x['areas'].split('-').includes(item); }).length;
  })
  var fdopts = { 'container': filter_fields_container, 'name': fds, 'state': fdstate, 'index': fdsindex, 'count': fdcount };

  // add filters by publication types
  var filter_type_container = document.querySelector("#filter_types");
  var tps = ['J', 'C', 'E', 'P', 'S'];
  var tpstate = Array(tps.length).fill(1);
  var tpsindex = { 'J': 0, 'C': 1, 'E': 2, 'P': 3, 'S': 4 };
  var tpcount = [ys['J'], ys['C'], ys['E'], ys['P'], ys['J'] + ys['C'] + ys['E'] + ys['P']];
  var tpopts = { 'container': filter_type_container, 'name': tps, 'state': tpstate, 'index': tpsindex, 'count': tpcount, 'citation': citations };

  // add filters by venues
  var filter_venue_container = document.querySelector("#filter_venues");
  var vns = ['IJCAI', 'AAMAS', 'InterSpeech', 'ISMB', 'CCN', 'AJCAI', 'NeurIPS Workshops', 'IJCAI Workshops', 'KDD Workshops', 'ICDM Workshops', 'show all'];
  var vnstate = Array(vns.length).fill(1);
  var vnsindex = { 'ijc': 0, 'aam': 1, 'int': 2, 'ism': 3, 'ccn': 4, 'new': 5, 'ijw': 6, 'kdw': 7, 'icw': 8, 'sho': 9 };
  var vncount = vns.map((item) => {
    return arr.filter((x) => {
      if (item.split(' ').length == 1) {
        return (x['venue'].split(' ').includes(item) && !x['venue'].includes('Workshop'));
      } else {
        return (x['venue'].split(' ').includes(item.split(' ')[0]) && x['venue'].includes('Workshop'));
      }
    }).length;
  });
  var vnopts = { 'container': filter_venue_container, 'name': vns, 'state': vnstate, 'index': vnsindex, 'count': vncount };

  // add listeners to both filters
  listenFieldFilter(arr, fdopts, tpopts, vnopts);
  listenTypeFilter(arr, fdopts, tpopts, vnopts);
  if (showvenues) {
    listenVenueFilter(arr, fdopts, tpopts, vnopts);
  }

  // automatically render lab experiences
  var labs_container = document.querySelector("#labs_container");
  var tablelist = labs.map((item) => {
    return `<tr>
    <td> ${item['from']} </td>
    <td> ${item['to']} </td>
    <td> ${(item['at']) ? item['at'] : ''}  </td>
    <td> ${item['with']} </td>
    <td> ${arr
        .filter(x => x['display'] && x['with'].split('-').includes(item['name']))
        .sort((a, b) => {
          return (a['year'] == b['year']) ? b['month'] - a['month'] : b['year'] - a['year']
        })
        .map(x => `<a href="#${x['id']}">[${pubids[x['id']]}]</a>`)
        .join('')} </td>

    ${(item['pubs']) ? item['pubs'].split('-')
        .map(x => `<a href="#${x}">[${pubids[x]}]</a>`).join('') : ''} </td>
    <td> ${(item['on']) ? item['on'].split('-')
        .map(x => getFields(x, 1, 1).replace(/&nbsp;/gi, '')).join(' ') : ''} </td>
</tr>`;
  }).join('');

  labs_container.innerHTML = `<p class="mb-5 text-primary"> <table align="left" border=1 frame=void rules=rows class="mb-5 text-primary">
      <tr style="padding:2px;border-radius:4px 4px 0 0;background-color:gainsboro;">
          <th> From </th>
          <th> To </th>
          <th> At </th>
          <th> With </th>
          <th> Published </th>
          <th> On </th>
      </tr> ${tablelist} </table> </p>`;

}

function listenFieldFilter(arr, fdopts, tpopts, vnopts) {

  filter_container = fdopts['container']
  fds = fdopts['name']
  fdstate = fdopts['state']
  fdsindex = fdopts['index']
  fdcount = fdopts['count']

  var allids = arr
    .filter((item) => { return item['display']; })
    .map((item) => { return document.getElementById(item['id']); });

  filter_container.innerHTML = `Click to filter by <b>research areas</b>: ${fds.map((fd, index) => {
    return (fd == 'SA') ? getFields(fd, 0, fdstate[index]) : getFields(fd, 0, fdstate[index]).replace(/&nbsp;<\/a>/gi, ` (<b>${fdcount[index]}</b>)&nbsp;</a>`);
  })
    .map((x, index) => { return { 'html': x, 'count': fdcount[index] }; })
    .sort((a, b) => { return b.count - a.count; })
    .map(x => x.html)
    .join('&nbsp;')}`;

  var fdfs = [].slice.call(document.getElementsByClassName("fd-filter"))
    .map((x) => { return { 'obj': x, 'count': fdcount[fdsindex[x.id.substring(0, 2).toLowerCase()]] }; })
    .sort((a, b) => { return b.count - a.count; })
    .map((x) => { return x.obj; });
  for (let i = 0; i < fdfs.length; i++) {
    fdfs[i].addEventListener("click", () => {
      if (fdfs[i].id.startsWith("sa")) {
        allids.forEach((item) => { item.style.display = 'block'; });
        fdstate = fdstate.map((item) => { return 1; });
      } else if (!fdstate[-1] && !fdfs[i].id.startsWith("sa") && fdstate.slice(0, -1).reduce((a, b) => { return a + b; }) + 1 == fdstate.length - 1) {
        allids.forEach((item) => { item.style.display = 'block'; });
        fdstate = fdstate.map((item) => { return 1; });
      } else {
        if (fdstate.reduce((a, b) => { return a * b; })) {
          fdstate = fdstate.map((item) => { return 0; });
          fdstate[fdsindex[fdfs[i].id.substring(0, 2)]] = 1;
        } else {
          fdstate[fdsindex[fdfs[i].id.substring(0, 2)]] = !fdstate[fdsindex[fdfs[i].id.substring(0, 2)]];
          if (fdstate.reduce((a, b) => { return a + b; }) == 0) {
            allids.forEach((item) => { item.style.display = 'block'; });
            fdstate = fdstate.map((item) => { return 1; });
          }
        }
        var toshow = fds.filter((item, index) => { return fdstate[index]; });
        var tohide = fds.filter((item, index) => { return !fdstate[index]; });
        var showids = arr
          .filter((item) => {
            var matched = toshow.filter((x) => { return item['areas'].split('-').includes(x); });
            return item['display'] && (matched.length > 0);
          })
          .map((item) => { return document.getElementById(item['id']); });
        var hideids = arr
          .filter((item) => {
            var matched = tohide.filter((x) => { return item['areas'].split('-').includes(x); });
            return item['display'] && (matched.length > 0);
          })
          .map((item) => { return document.getElementById(item['id']); });
        hideids.forEach((item) => { item.style.display = 'none'; });
        showids.forEach((item) => { item.style.display = 'block'; });
      }
      tpopts['state'] = tpopts['state'].map((item) => { return 1; });
      vnopts['state'] = vnopts['state'].map((item) => { return 1; });
      fdopts['state'] = fdstate;
      listenTypeFilter(arr, fdopts, tpopts, vnopts);
      if (showvenues) {
        listenVenueFilter(arr, fdopts, tpopts, vnopts);
      }
      listenFieldFilter(arr, fdopts, tpopts, vnopts);
    });
  }
}

function listenTypeFilter(arr, fdopts, tpopts, vnopts) {

  filter_container = tpopts['container']
  tps = tpopts['name']
  tpstate = tpopts['state']
  tpsindex = tpopts['index']
  tpcount = tpopts['count']
  citations = tpopts['citation']

  var allids = arr
    .filter((item) => { return item['display']; })
    .map((item) => { return document.getElementById(item['id']); });

  filter_container.innerHTML = `Click to filter by <b>publication types</b>: 
  ${getTypes('S', 0, tpstate[4]).replace(/&nbsp;<\/a>/gi, ` (<b>${tpcount[4]}</b>)&nbsp;</a>`)} = ${tps.slice(0, 4).map((tp, index) => {
    return getTypes(tp, 0, tpstate[index]).replace(/&nbsp;<\/a>/gi, ` (<b>${tpcount[index]}</b>)&nbsp;</a>`);
  })
      .join('&nbsp;+&nbsp;')}, with <a href="https://scholar.google.com/citations?user=H67KJ4cAAAAJ&hl=en">${citations}</a> citations.`;

  var tpfs = [].slice.call(document.getElementsByClassName("tp-filter"));
  for (let i = 0; i < tpfs.length; i++) {
    tpfs[i].addEventListener("click", () => {
      if (tpfs[i].id.startsWith("s-")) {
        allids.forEach((item) => { item.style.display = 'block'; });
        tpstate = tpstate.map((item) => { return 1; });
      } else if (!tpstate[-1] && !tpfs[i].id.startsWith("s-") && tpstate.slice(0, -1).reduce((a, b) => { return a + b; }) + 1 == tpstate.length - 1) {
        allids.forEach((item) => { item.style.display = 'block'; });
        tpstate = tpstate.map((item) => { return 1; });
      } else {
        if (tpstate.reduce((a, b) => { return a * b; })) {
          tpstate = tpstate.map((item) => { return 0; });
          tpstate[tpsindex[tpfs[i].id.substring(0, 1).toUpperCase()]] = 1;
        } else {
          tpstate[tpsindex[tpfs[i].id.substring(0, 1).toUpperCase()]] = !tpstate[tpsindex[tpfs[i].id.substring(0, 1).toUpperCase()]];
          if (tpstate.reduce((a, b) => { return a + b; }) == 0) {
            allids.forEach((item) => { item.style.display = 'block'; });
            tpstate = tpstate.map((item) => { return 1; });
          }
        }
        var toshow = tps.filter((item, index) => { return tpstate[index]; });
        var tohide = tps.filter((item, index) => { return !tpstate[index]; });
        var showids = arr
          .filter((item) => {
            var matched = toshow.filter((x) => { return item['type'] == x; });
            return item['display'] && (matched.length > 0);
          })
          .map((item) => { return document.getElementById(item['id']); });
        var hideids = arr
          .filter((item) => {
            var matched = tohide.filter((x) => { return item['type'] == x; });
            return item['display'] && (matched.length > 0);
          })
          .map((item) => { return document.getElementById(item['id']); });
        hideids.forEach((item) => { item.style.display = 'none'; });
        showids.forEach((item) => { item.style.display = 'block'; });
      }
      fdopts['state'] = fdopts['state'].map((item) => { return 1; });
      vnopts['state'] = vnopts['state'].map((item) => { return 1; });
      tpopts['state'] = tpstate;
      listenFieldFilter(arr, fdopts, tpopts, vnopts);
      if (showvenues) {
        listenVenueFilter(arr, fdopts, tpopts, vnopts);
      }
      listenTypeFilter(arr, fdopts, tpopts, vnopts);
    });
  }
}

function listenVenueFilter(arr, fdopts, tpopts, vnopts) {

  filter_container = vnopts['container']
  vns = vnopts['name']
  vnstate = vnopts['state']
  vnsindex = vnopts['index']
  vncount = vnopts['count']

  var allids = arr
    .filter((item) => { return item['display']; })
    .map((item) => { return document.getElementById(item['id']); });

  filter_container.innerHTML = `Click to filter by <b>venues</b>: ${vns.map((vn, index) => {
    return (vn == 'show all') ? getVenues(vn, 0, vnstate[index]) : getVenues(vn, 0, vnstate[index]).replace(/&nbsp;<\/a>/gi, ` (<b>${vncount[index]}</b>)&nbsp;</a>`);
  })
    .join('&nbsp;')}`;

  var vnfs = [].slice.call(document.getElementsByClassName("vn-filter"));
  for (let i = 0; i < vnfs.length; i++) {
    vnfs[i].addEventListener("click", () => {
      if (vnfs[i].id.startsWith("sho")) {
        allids.forEach((item) => { item.style.display = 'block'; });
        vnstate = vnstate.map((item) => { return 1; });
      } else if (!vnstate[-1] && !vnfs[i].id.startsWith("sho") && vnstate.slice(0, -1).reduce((a, b) => { return a + b; }) + 1 == vnstate.length - 1) {
        allids.forEach((item) => { item.style.display = 'block'; });
        vnstate = vnstate.map((item) => { return 1; });
      } else {
        if (vnstate.reduce((a, b) => { return a * b; })) {
          vnstate = vnstate.map((item) => { return 0; });
          vnstate[vnsindex[vnfs[i].id.substring(0, 3)]] = 1;
        } else {
          vnstate[vnsindex[vnfs[i].id.substring(0, 3)]] = !vnstate[vnsindex[vnfs[i].id.substring(0, 3)]];
          if (vnstate.reduce((a, b) => { return a + b; }) == 0) {
            allids.forEach((item) => { item.style.display = 'block'; });
            vnstate = vnstate.map((item) => { return 1; });
          }
        }
        var toshow = vns.filter((item, index) => { return vnstate[index]; });
        var tohide = vns.filter((item, index) => { return !vnstate[index]; });
        var showids = arr
          .filter((item) => {
            var matched = toshow.filter((x) => {
              return (x.includes('Workshop')) ? (item['venue'].includes('Workshop') && item['venue'].toLowerCase().includes(x.split(' ')[0].toLowerCase())) : (!item['venue'].includes('Workshop') && item['venue'].toLowerCase().includes(x.split(' ')[0].toLowerCase()));
            });
            return item['display'] && (matched.length > 0);
          })
          .map((item) => { return document.getElementById(item['id']); });
        var hideids = arr
          .filter((item) => {
            var matched = toshow.filter((x) => {
              return (x.includes('Workshop')) ? (item['venue'].includes('Workshop') && item['venue'].toLowerCase().includes(x.split(' ')[0].toLowerCase())) : (!item['venue'].includes('Workshop') && item['venue'].toLowerCase().includes(x.split(' ')[0].toLowerCase()));
            });
            return item['display'] && (matched.length == 0);
          })
          .map((item) => { return document.getElementById(item['id']); });
        hideids.forEach((item) => { item.style.display = 'none'; });
        showids.forEach((item) => { item.style.display = 'block'; });
      }
      fdopts['state'] = fdopts['state'].map((item) => { return 1; });
      tpopts['state'] = tpopts['state'].map((item) => { return 1; });
      vnopts['state'] = vnstate;
      listenFieldFilter(arr, fdopts, tpopts, vnopts);
      listenTypeFilter(arr, fdopts, tpopts, vnopts);
      if (showvenues) {
        listenVenueFilter(arr, fdopts, tpopts, vnopts);
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
  <br /> <span id="filter_types"></span>
  <br />
  <br /> <span id="filter_fields"></span>
  <br />
  <br /> <span id="filter_venues"></span>
  <br />
  <br /> Click on <b>abstract</b> to learn more, or [&nbsp;<a style="color:#268fd6;" class="collapsibleall" id="expall">expand all abstracts </a>&nbsp;] &nbsp; </p>`;
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
      pubids[item['id']] = item['type'] + count;
      return `<li class="li-pubs" id="${item['id']}">
      <div class="row">
      <div class="imgcolumn">
      <img class="rounded-corner" style="width:100%;border-radius:10%;border:2px solid dimgrey;" src="./img/publications/${item['image']}" alt="${item['id']}" >
      </div>
      <div class="textcolumn">
          [${item['type'] + count}]&nbsp;<b class="text-primary"> ${item['title']} </b>
          <br />
          ${item['authors'].replace(/Baihan Lin/gi, '<b><span style="color: dimgray;">Baihan Lin</span></b>')}
          <br />
          <p> ${item['areas'].split('-').map((item) => { return getFields(item, 1, 1) }).join('&nbsp;')} </p>
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
  <br />
  </li>`;
    })
    .reverse()
    .join("");
  content = `<h3> ${yr == -1 ? 'ongoing...' : yr} </h3><br /><ul class="fa-ul mb-0">${content}</ul>`;
  summary = { 'html': content, 'J': J, 'C': C, 'E': E, "P": P };
  // console.log(summary)
  return summary
}

