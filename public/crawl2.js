var arrs = [];
document.querySelectorAll(".tab_box .tab-pane")[2].querySelectorAll(".su-spoiler").forEach((v, i) => {
    let title = v.querySelector(".su-spoiler-title").innerText;
    let tIdx = title.indexOf(".");
    let idx = title.substring(0, tIdx);
    title = title.substring(tIdx + 1);
    let contents = v.querySelectorAll(".su-spoiler-content > *");
    let mean = '';
    let usage = '';
    let isConti = true;
    contents.forEach((v1, i1) => {
        if (v1.nodeName == "DIV") {
            let isConti1 = true;
            for (let index = 0; index < v1.children.length; index++) {
                let v2 = v1.children[index];
                
                if (v2.nodeName == "OL") {
                    isConti1 = false;
                }
        
                if (!isConti1) {
                    return;
                }
        
                let child = v2.querySelector("span");
                if (child) {
                    usage += child.innerText.trim() + ' '; 
                }
                else {
                    mean += v2.innerText.trim() + ' ';
                }
                
            }
            return;
        }
        
        if (v1.nodeName == "OL") {
            isConti = false;
        }

        if (!isConti) {
            return;
        }

        let child = v1.querySelector("span");
        if (child) {
            usage += child.innerText.trim() + ' '; 
        }
        else {
            mean += v1.innerText.trim() + ' ';
        }
    });

    arrs.push({
        id: parseInt(idx),
        grammar: "",
        plus: [],
        title: title.trim(),
        mean: mean.trim(),
        scope: "N2",
        book: "Try N2",
        usage: usage.trim()
    });
});

console.log(JSON.stringify(arrs));
