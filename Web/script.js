const SastaReact = document.getElementById('main')
downloadPDF = document.createElement('div');
downloadPDF.setAttribute('class','item');
downloadPDF.innerHTML = `
<a href="https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/raw/main/PROVISIONAL%20RESULT%20OF%20UG%204TH%20SEMESTER%20REGULAR%20EXAMINATION_2021_2022.pdf" rel="noopener noreferrer"> <i class="fas bg-danger fa-file-pdf text-white fs-2"></i> Download PDF</a>
`
SastaReact.appendChild(downloadPDF)
const LinkedListLOL = [
    {
        "title": "Biotechnology Rankwise Results (CGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-BT-CGPA-Sem4.txt"
    },
    {
        "title": "Computer Rankwise Results (CGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-CS-CGPA-Sem4.txt"
    },
    {
        "title": "Chemical Rankwise Results (CGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-CH-CGPA-Sem4.txt"
    },
    {
        "title": "Civil Rankwise Results (CGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-CE-CGPA-Sem4.txt"
    },
    {
        "title": "Electronics Rankwise Results (CGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-EC-CGPA-Sem4.txt"
    },
    {
        "title": "Electrical Rankwise Results (CGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-EE-CGPA-Sem4.txt"
    },
    {
        "title": "Mechanical Rankwise Results (CGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-ME-CGPA-Sem4.txt"
    },
    {
        "title": "Metallurgy Rankwise Results (CGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-MM-CGPA-Sem4.txt"
    },
    {
        "title": "DD Biotechnology Rankwise Results (CGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-DD-BT-CGPA-Sem4.txt"
    },
    {
        "title": "INT Chemical Rankwise Results (CGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-INT-M.Sc.-CY-CGPA-Sem4.txt"
    },
    {
        "title": "Biotechnology Rankwise Results (SCGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-BT-SGPA-Sem4.txt"
    },
    {
        "title": "Computer Rankwise Results (SCGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-CS-SGPA-Sem4.txt"
    },
    {
        "title": "Chemical Rankwise Results (SCGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-CH-SGPA-Sem4.txt"
    },
    {
        "title": "Civil Rankwise Results (SCGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-CE-SGPA-Sem4.txt"
    },
    {
        "title": "Electronics Rankwise Results (SCGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-EC-SGPA-Sem4.txt"
    },
    {
        "title": "Electrical Rankwise Results (SCGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-EE-SGPA-Sem4.txt"
    },
    {
        "title": "Mechanical Rankwise Results (SCGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-ME-SGPA-Sem4.txt"
    },
    {
        "title": "Metallurgy Rankwise Results (SCGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-MM-SGPA-Sem4.txt"
    },
    {
        "title": "DD Biotechnology Rankwise Results (SCGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-DD-BT-SGPA-Sem4.txt"
    },
    {
        "title": "INT Chemical Rankwise Results (SCGPA)",
        "url": "https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/blob/main/Ranked-INT-M.Sc.-CY-SGPA-Sem4.txt"
    },
]

for (const key in LinkedListLOL) {
    var div = document.createElement('div');
    div.setAttribute('class','item');
    
    if (LinkedListLOL[key]["title"].includes("SCGPA")) {
        div.setAttribute('class','itemSCGPA');
    }

    div.innerHTML=`
        <a href="${LinkedListLOL[key]["url"]}">${LinkedListLOL[key]["title"]}</a>
    `
    SastaReact.appendChild(div)
}


thatBody = document.getElementsByTagName('body')[0];

footer = document.createElement('div');
footer.setAttribute('class','footer');

footer.innerHTML = `
<a href="">Made with ❤ by Devraj </a>
`

thatBody.appendChild(footer)