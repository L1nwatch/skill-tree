const projects_info = [
    {
        "title": "Hands-on Experience List",
        "company": "Personal",
        "description": "Store my hands-on experience information in a JSON file, then use Python to load the JSON data and generate a JavaScript file. This allows the HTML file to load the content and display it on a web page. This web page is published on GitHub Pages.",
        "labels": [
            "html/css/js",
            "python",
            "GitHub-Actions"
        ],
        "url": "https://l1nwatch.github.io/skill-tree/project_list/project_list.html"
    },
    {
        "title": "Video Content Recognition",
        "company": "Huawei CA",
        "description": "Leverage prompt techniques (e.g., few-shot) to use an LLM (such as DeepSeek) for recognizing picture scenarios. This helps filter inaccurate test results reported by the algorithm. The workflow is implemented in Python.",
        "labels": [
            "LLM",
            "Deepseek",
            "Python",
            "Prompt-engineering"
        ]
    },
    {
        "title": "Skill Tree",
        "company": "Personal",
        "description": "Store my skills information in a JSON file, then use Python to load the JSON data and generate a JavaScript file. This allows the HTML file to load the content and display it on a web page. This web page is published on GitHub Pages.",
        "labels": [
            "html/css/js",
            "python",
            "GitHub-Actions"
        ],
        "url": "https://l1nwatch.github.io/skill-tree/"
    },
    {
        "title": "Auto Lotto",
        "company": "Personal",
        "description": "Use an LLM to predict the next lottery number, then automate the purchasing process and verify whether the bought number wins. Display the results on GitHub Pages. I used the OpenAI API and deployed locally on a Mac Mini via Ollama, running a 14B DeepSeek model. A self-hosted runner (Docker) executes the buying process, utilizing headless Selenium to log into the lottery website and complete the purchase. This process runs daily via GitHub Actions.",
        "labels": [
            "GitHub-Actions",
            "Docker",
            "self-hosted runner",
            "html/css/js",
            "python",
            "LLM",
            "OpenAI",
            "DeepSeek",
            "ollama",
            "selenium",
            "sqlite"
        ],
        "url": "https://github.com/L1nwatch/auto_market"
    },
    {
        "title": "Mobile OS Jank Detection",
        "company": "Huawei CA",
        "description": "Developed an API for the testing team to detect jank occurrences in the mobile OS, including the timestamp and jank type. The API is implemented in Python and uses the SSIM algorithm to calculate the similarity between consecutive frames. The project is well-maintained with CI/CD workflows running on Jenkins. Extensive test cases are written using Pytest and Unittest to ensure the recall and precision rates of each algorithm update.",
        "labels": [
            "Jenkins",
            "poetry",
            "python",
            "unittest/pytest",
            "ssim"
        ]
    },
    {
        "title": "Product Quality Monitoring",
        "company": "Huawei CA",
        "description": "Collected all test results, including performance metrics (e.g., response time), and applied algorithms such as change-point detection to identify abnormal data points. Summarized the overall performance for each version to determine whether the new release improves or degrades specific performance metrics.",
        "labels": [
            "Python",
            "mysql"
        ]
    },
    {
        "title": "Cloud Service Testing",
        "company": "Alibaba",
        "description": "The cloud service provides functionality for applications such as food delivery platforms and map services. I was responsible for testing the service, including API testing, performance testing, and end-to-end testing. I used tools like Postman for API testing, JMeter for performance testing, and Java with JUnit or Selenium to simulate user scenarios and validate correctness.",
        "labels": [
            "Java",
            "postman",
            "jmeter",
            "junit",
            "selenium"
        ]
    },
    {
        "title": "Matter Certification Integration",
        "company": "TCL",
        "description": "TCL's smart home devices require Matter certification to ensure compatibility with other smart home ecosystems. I was responsible for integrating the Matter certification process, automating certification test cases using Python and shell scripts. These test cases validated smart home devices, such as smart TVs, by invoking internal Android APIs to simulate various scenarios. Additionally, Raspberry Pi was used to simulate certain test steps, such as device pairing, to enhance the testing process.",
        "labels": [
            "Shell",
            "Python",
            "unittest/pytest",
            "Raspberry-Pi"
        ],
        "url": "https://github.com/project-chip/connectedhomeip"
    },
    {
        "title": "IoT Testing Framework",
        "company": "TCL",
        "description": "Designed an easy-to-use testing framework to help test engineers automate test cases efficiently. The framework is inspired by Robot Framework, incorporating concepts like keyword-driven and data-driven testing. I developed it using Python and libraries such as unittest, providing essential keywords to simplify automation. These include simulating human hand movements using a robot arm, generating remote control signals with an infrared(IR) signal simulator, and automating phone operations via Appium. Additionally, the framework supports test environments with tools like Android simulators for simulating Android devices.",
        "labels": [
            "Python",
            "appium",
            "selenium",
            "unittest/pytest",
            "robot-arm",
            "IR-simulator",
            "android-simulator",
            "docker",
            "shell",
            "jmeter"
        ]
    },
    {
        "title": "IoT Products Quality Assurance",
        "company": "TCL",
        "description": "Following the ISO 25001 standard, I designed the release standards for IoT products, with documentation published on Confluence. We utilized Jira to configure key project statuses and manage various aspects, including project tracking, bug monitoring, test cases, and requirements management. Additionally, Jira was integrated with Agile workflows to track each team member's tasks and achievements, ensuring efficient collaboration and progress monitoring.",
        "labels": [
            "jira",
            "confluence"
        ]
    },
    {
        "title": "LLM Research",
        "company": "Concordia University",
        "description": "Conducted few research studies on LLM-based code generation. Designed a custom testing framework using unittest to evaluate the LLM's capabilities in generating code. Leveraged prompt engineering techniques and development methodologies such as Waterfall, Agile, and Test-Driven Development (TDD) to enhance the LLM\u2019s performance in code generation tasks.",
        "labels": [
            "LLM",
            "Claude",
            "Openai",
            "Python",
            "unittest/pytest",
            "prompt-engineering"
        ],
        "url": "https://scholar.google.ca/citations?user=Xaywm_QAAAAJ&hl=en"
    },
    {
        "title": "Network Firewall Testing",
        "company": "Sangfor",
        "description": "Developed automated test scripts in Python for network firewall testing. Utilized tools from Kali Linux and Python libraries such as requests and scapy to simulate web and network attacks, including SQL injection, XSS, and CSRF. Implemented Selenium to automate user interactions for firewall configuration and leveraged shell scripts to streamline the test execution process.",
        "labels": [
            "Python",
            "unittest/pytest",
            "kali",
            "Selenium",
            "shell",
            "mongodb",
            "docker",
            "mysql"
        ]
    },
    {
        "title": "Virus Detection Engine Testing",
        "company": "Sangfor",
        "description": "Utilized VMware as a sandbox environment to collect and execute virus samples. Developed Python scripts to analyze detection rates and false positive rates, evaluating the effectiveness of security mechanisms.",
        "labels": [
            "machine-learning",
            "Python",
            "vmware"
        ]
    },
    {
        "title": "Language Learning Platform",
        "company": "Personal",
        "description": "Developed a language learning platform using Flask for the backend, SQLite for the database, and HTML/CSS/JavaScript for the frontend. Designed the platform to facilitate easy note-taking and efficient review, enhancing the learning experience.",
        "labels": [
            "Python",
            "flask",
            "sqlite",
            "html/css/js"
        ],
        "url": "https://github.com/L1nwatch/language-learning"
    },
    {
        "title": "Personal Portfolio",
        "company": "Personal",
        "description": "Developed a personal portfolio website to serve as a central hub for my daily tools and note database. Built using Django with SQLite as the database, the project includes extensive unit tests and functional tests using Selenium. Integrated GitHub Actions to automate the CI/CD pipeline, ensuring continuous testing and seamless deployment to the server.",
        "labels": [
            "Python",
            "unittest/pytest",
            "sqlite ",
            "Django",
            "html/css/js",
            "selenium",
            "github-actions",
            "shell"
        ],
        "url": "https://github.com/L1nwatch/my_blog_source"
    }
];