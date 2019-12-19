function dummyGraph() {
    fetch('../datasets/miserables.json').then(res => res.json()).then(data => {
        const Graph = ForceGraph()
            (document.getElementById('graph'))
            .graphData(data)
            .nodeId('id')
            .nodeRelSize(4)
            .nodeVal('val')
            .nodeLabel('id' + ':' + 'group')
            .nodeAutoColorBy('group')
            .linkSource('source')
            .linkTarget('target')
            .height(600)
    });
}