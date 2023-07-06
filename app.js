const expandedInfo = document.querySelector("#expandedinfo-el")
const contact = document.querySelector("#contact-el")
const skills = document.querySelector("#skills-el")
const about = document.querySelector("#about-el")
const projects = document.querySelector("#projects-el")


// skills
skills.addEventListener("click", function() {
    expandedInfo.innerHTML = `
        <h2>
            Skills
        </h2>
        `
})

// projects 

projects.addEventListener("click", function(){
    expandedInfo.innerHTML = `
        <h2>
            Projects
        </h2>
        <div id="projectsContainer">
            <div>
                <div id="projectShowcase">
    
                </div>
                <div id="projectDescription">
    
                </div>
            </div>
    
            <div>
                <div id="projectShowcase">
            
                </div>
                <div id="projectDescription">
            
                </div>
            </div>
            
            <div>
                <div id="projectShowcase">
            
                </div>
                <div id="projectDescription">
            
                </div>
            </div>
            
        </div>
        

        `
})

// about 

about.addEventListener("click", function () {
    expandedInfo.innerHTML = `
    <h2>
        About
    </h2>
    `
})

// contact 

contact.addEventListener("click", function() {
    expandedInfo.innerHTML = `
    <h2>
        Contact 
    </h2>
    `
})
