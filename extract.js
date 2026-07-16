const mammoth = require("mammoth");
const fs = require("fs");

mammoth.extractRawText({path: "F:\\srirangam project\\Sri Ranganathar_Tamil.docx"})
    .then(function(result){
        const text = result.value;
        fs.writeFileSync("F:\\srirangam project\\tamil_extracted.txt", text);
        console.log("Done extracting Tamil text");
    })
    .done();
