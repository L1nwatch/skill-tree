document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.querySelector(".project-list");
    const labelSummary = document.querySelector(".label-summary");

    const labelCounts = {};

    projects_info.forEach(project => {
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
                    <h3 style="display: flex; justify-content: space-between;">
                        <span class="title">${project.title}</span>
                        <span class="company">${project.company}</span>
                    </h3>
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

    const sortedLabels = Object.entries(labelCounts).sort((a, b) => b[1] - a[1]);

    sortedLabels.forEach(([label, count]) => {
        const labelItem = document.createElement("div");
        labelItem.className = "label-item";
        labelItem.innerHTML = `<span class="label">${label}</span>: ${count}`;
        labelSummary.appendChild(labelItem);
    });
});