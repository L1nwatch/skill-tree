const projects = [
    {
        "title": "aaaa",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam",
        "labels": [
            "JavaScript",
            "Web Development"
        ],
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/324479/me.jpg"
    },
    {
        "title": "RGA",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit obcaecati cumque fugit quia ullam",
        "labels": [
            "Python",
            "Data Analysis"
        ],
        "img": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/324479/me.jpg"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.querySelector(".project-list");
    const labelSummary = document.querySelector(".label-summary");

    const labelCounts = {};

    projects.forEach(project => {
        project.labels.forEach(label => {
            if (labelCounts[label]) {
                labelCounts[label]++;
            } else {
                labelCounts[label] = 1;
            }
        });

        const projectItem = document.createElement("a");
        projectItem.className = "project-item";
        projectItem.href = "#0";
        projectItem.innerHTML = `
            <div class="item-inner">
                <div class="content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
                <div class="item-footer">
                    <div class="item-labels">
                        ${project.labels.map(label => `<span class="label">${label}</span>`).join(' ')}
                    </div>
                </div>
            </div>
        `;
        projectList.appendChild(projectItem);
    });

    for (const [label, count] of Object.entries(labelCounts)) {
        const labelItem = document.createElement("div");
        labelItem.className = "label-item";
        labelItem.innerHTML = `<span class="label">${label}</span>: ${count}`;
        labelSummary.appendChild(labelItem);
    }
});