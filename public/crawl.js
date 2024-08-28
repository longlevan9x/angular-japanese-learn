var arrs = [];
document.querySelectorAll(".cm-entry-summary table.chanle tbody tr").forEach((v, i) => {
    //console.log(v.innerText)
    const text = v.innerText;
    const numIndex = text.indexOf(".");
    const num = text.substr(0, numIndex);
    // const gramIndex =  text.indexOf("：");
    const gramIndex =  text.indexOf(":");
    //console.log(gramIndex, text);
    const gram = text.substring(numIndex + 1, gramIndex);
    const mean = text.substring( gramIndex + 1);
    //console.log(gram, mean);
    arrs.push({
        id: parseInt(num),
        name: gram,
        mean: mean,
        scope: "N2"
    });
});
console.log(JSON.stringify(arrs));