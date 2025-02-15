document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.querySelector(".project-list");
    const labelSummary = document.querySelector(".label-summary");

    const labelCounts = {};

    // Sort projects_info based on the number of labels
    const sortedProjects = projects_info.sort((a, b) => b.labels.length - a.labels.length);

    sortedProjects.forEach(project => {
        project.labels.forEach(label => {
            const lowerCaseLabel = label.toLowerCase();
            const capitalizedLabel = lowerCaseLabel.charAt(0).toUpperCase() + lowerCaseLabel.slice(1);
            if (labelCounts[capitalizedLabel]) {
                labelCounts[capitalizedLabel]++;
            } else {
                labelCounts[capitalizedLabel] = 1;
            }
        });

        // Sort the labels within each project alphabetically
        const sortedLabels = project.labels.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        const projectItem = document.createElement("a");
        projectItem.className = "project-item";
        projectItem.href = "#0";
        projectItem.innerHTML = `
            <div class="item-inner">
                <div class="content">
                    <h3 style="display: flex; justify-content: space-between;">
                        ${project.url ? `<a href="${project.url}" class="title" target="_blank">${project.title}</a>` : `<span class="title">${project.title}</span>`}
                        <span class="company">${project.company}</span>
                    </h3>
                    <p>${project.description}</p>
                </div>
                <div class="item-footer">
                    <div class="item-labels">
                        ${sortedLabels.map(label => {
                            const lowerCaseLabel = label.toLowerCase();
                            const capitalizedLabel = lowerCaseLabel.charAt(0).toUpperCase() + lowerCaseLabel.slice(1);
                            return `<span class="label">${capitalizedLabel}</span>`;
                        }).join(' ')}
                    </div>
                </div>
            </div>
        `;
        projectList.appendChild(projectItem);
    });

    const sortedLabels = Object.entries(labelCounts).sort((a, b) => b[1] - a[1]);

    // Filter and display only labels with count > 1
    sortedLabels.filter(([label, count]) => count > 1).forEach(([label, count]) => {
        const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
        const labelItem = document.createElement("div");
        labelItem.className = "label-item";
        labelItem.innerHTML = `<span class="label">${capitalizedLabel}</span>: ${count}`;
        labelSummary.appendChild(labelItem);
    });
});