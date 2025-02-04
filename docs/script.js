var headerHeight = getHeaderGap();


var adjust_width = window.innerWidth,   // Use full window width
    adjust_height = window.innerHeight - headerHeight; // Subtract header height


var diameter = Math.min(adjust_width, adjust_height) * 0.9; // Scale to 90% of the smaller dimension

var tree = d3.layout.tree()
    .size([360, diameter / 2 - 80])
    .separation(function (a, b) {
        return (a.parent == b.parent ? 1 : 10) / a.depth;
    });

// Create a scrollable container for the SVG
var container = d3.select("body").append("div")
    .style("width", "100vw")
    .style("height", "100vh")
    .style("margin", "0 auto") // Center horizontally
    .style("overflow", "auto") // Enable scrolling
    .style("top", headerHeight + "px") // Push below header
    .style("position", "relative");

var svg = container.append("svg")
    .attr("width", adjust_width)
    .attr("height", 900)
    .style("display", "block") // Ensure it's centered horizontally
    .style("position", "absolute") // Allow precise positioning
    .style("left", "50%") // Center horizontally
    .style("transform", "translateX(-50%)") // Adjust to center
    .append("g")
    .attr("transform", "translate(" + adjust_width / 2 + "," + adjust_height / 2 + ")");


var margin = {top: 20, right: 120, bottom: 20, left: 120};

var i = 0, duration = 350, root;

var diagonal = d3.svg.diagonal.radial()
    .projection(function (d) {
        return [d.y, d.x / 180 * Math.PI];
    });

// Function to generate a random color
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function getHeaderGap() {
    var header = document.querySelector(".header");
    var headerHeight = header.offsetHeight;

    // Ensure the gap is at least 5% but no more than 15% of the screen height
    return Math.min(Math.max(headerHeight, window.innerHeight * 0.05), window.innerHeight * 0.15);
}

// Update frame height to full screen
d3.select(self.frameElement).style("width", "100vw").style("height", "100vh");

// Make it responsive on window resize
window.addEventListener("resize", function () {
    d3.select("svg")
        .attr("width", adjust_width)
        .attr("height", adjust_height)
        .style("margin", "0 auto") // Center horizontally
        .style("margin-top", "10px") // Move SVG below the header; // Adjust dynamically;

    svg.attr("transform", "translate(" + adjust_width / 2 + "," + adjust_height / 2 + ")");
});

root = pubs;
root.x0 = adjust_height / 2;
root.y0 = 0;

//root.children.forEach(collapse); // start with all children collapsed
update(root);


function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root), links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
        d.y = d.depth * 100;
    });

    // Update the nodes…
    var node = svg.selectAll("g.node")
        .data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "rotate(" + (d.x ? d.x - 90 : 0) + ")translate(" + (d.y || 0) + ")";
        })
        .on("click", click);

    nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("fill", function (d) {
            // return d._color || (d._color = getRandomColor());
            return d._children ? "lightsteelblue" : "#fff";
        });

    nodeEnter.append("text")
        .attr("x", 10)
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        //.attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length * 8.5)  + ")"; })
        .text(function (d) {
            return d.name;
        })
        .style("fill-opacity", 1e-6)
        .style("font-size", "14px"); // Increase font size;

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "rotate(" + (d.x ? d.x - 90 : 0) + ")translate(" + (d.y || 0) + ")";
        })
    // Ensure root node has valid initial values
    root.x0 = root.x0 || adjust_height / 2;
    root.y0 = root.y0 || 0;

    nodeUpdate.select("circle")
        .attr("r", 10)
        .style("fill", function (d) {
            // return d._color;
            // return d._children ? "lightsteelblue" : "#fff";
            return d === root ? getRandomColor() : (d._children ? "lightsteelblue" : "#fff");
        });

    nodeUpdate.select("text")
        .style("fill-opacity", 1)
        .style("font-size", "14px") // Ensure font size remains larger on update
        .attr("transform", function (d) {
            return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length + 50) + ")";
        });

    // TODO: appropriate transform
    var nodeExit = node.exit().transition()
        .duration(duration)
        //.attr("transform", function(d) { return "diagonal(" + source.y + "," + source.x + ")"; })
        .remove();

    nodeExit.select("circle")
        .attr("r", 1e-6);

    nodeExit.select("text")
        .style("fill-opacity", 1e-6);

    // Update the links…
    var link = svg.selectAll("path.link")
        .data(links, function (d) {
            return d.target.id;
        });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
            var o = {x: d.source.x || 0, y: d.source.y || 0}; // Fallback to 0 if undefined
            return diagonal({source: o, target: o});
        });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", function (d) {
            var oSource = {x: d.source.x || 0, y: d.source.y || 0}; // Ensure valid source
            var oTarget = {x: d.target.x || 0, y: d.target.y || 0}; // Ensure valid target
            return diagonal({source: oSource, target: oTarget});
        });


    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = {x: d.source.x || 0, y: d.source.y || 0}; // Fallback to valid numbers
            return diagonal({source: o, target: o});
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

// Function to show a detailed description box
function showDescriptionBox(title, description) {
    let descriptionBox = document.getElementById("description-box");

    if (!descriptionBox) {
        // Create the box if it doesn't exist
        descriptionBox = document.createElement("div");
        descriptionBox.id = "description-box";
        descriptionBox.style.position = "fixed";
        descriptionBox.style.top = "-300px";  // Initially hidden
        descriptionBox.style.left = "50%";
        descriptionBox.style.transform = "translateX(-50%)";
        descriptionBox.style.background = "#fff";
        descriptionBox.style.color = "#333";
        descriptionBox.style.padding = "15px 20px";
        descriptionBox.style.borderRadius = "8px";
        descriptionBox.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        descriptionBox.style.transition = "top 0.5s ease-in-out";
        descriptionBox.style.zIndex = "9999";
        descriptionBox.style.width = "300px";
        descriptionBox.style.maxWidth = "90%";
        descriptionBox.style.display = "flex";
        descriptionBox.style.flexDirection = "column";
        descriptionBox.style.gap = "10px";

        // Title
        let titleElem = document.createElement("h3");
        titleElem.id = "description-title";
        titleElem.style.margin = "0";
        titleElem.style.fontSize = "18px";
        titleElem.style.color = "#000";

        // Description
        let descriptionElem = document.createElement("p");
        descriptionElem.id = "description-content";
        descriptionElem.style.margin = "0";
        descriptionElem.style.fontSize = "14px";
        descriptionElem.style.color = "#555";

        // Close button
        let closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.style.background = "#007BFF";
        closeButton.style.border = "none";
        closeButton.style.color = "#fff";
        closeButton.style.padding = "8px 12px";
        closeButton.style.borderRadius = "5px";
        closeButton.style.cursor = "pointer";
        closeButton.style.alignSelf = "flex-end";

        closeButton.onclick = function () {
            descriptionBox.style.top = "-300px"; // Slide up to hide
        };

        descriptionBox.appendChild(titleElem);
        descriptionBox.appendChild(descriptionElem);
        descriptionBox.appendChild(closeButton);
        document.body.appendChild(descriptionBox);
    }

    // Update the content
    document.getElementById("description-title").textContent = title;
    document.getElementById("description-content").textContent = description;

    descriptionBox.style.top = "20px"; // Slide down effect
}

// Modify the click function
function click(d) {
    if (!d.children && !d._children) {
        // If the node has no children, it's a leaf node
        if (d.description) {
            showDescriptionBox("Experience with: " + d.name, d.description);
        }
    }

    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }

    update(d);
}


// Collapse nodes
function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}