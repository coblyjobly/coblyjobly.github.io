// Preloader (Optional)
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

// Smooth Scrolling for Navigation Links
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

document.querySelectorAll('.read-more-link').forEach(link => {
    link.addEventListener('click', () => {
        const projectInfo = link.parentElement; // Get the parent of the link
        const moreContent = projectInfo.querySelector('.more-content');
        const projectCard = projectInfo.closest('.project'); // Get the project card

        // Check if the current project is already expanded
        const isExpanded = projectInfo.classList.contains('expanded');

        // Collapse all expanded projects
        document.querySelectorAll('.project-info.expanded').forEach(expandedProject => {
            if (expandedProject !== projectInfo) { // Avoid collapsing the one that's being clicked
                const expandedLink = expandedProject.querySelector('.read-more-link');
                const expandedContent = expandedProject.querySelector('.more-content');
                const expandedCard = expandedProject.closest('.project'); // Get the expanded project card

                expandedContent.style.height = `0`; // Collapse the content
                expandedProject.classList.remove('expanded'); // Remove the expanded class
                expandedCard.classList.remove('active'); // Remove the active class to collapse gradient
                expandedLink.textContent = "Read More"; // Change the link text
                
                // Reset display after transition ends
                setTimeout(() => {
                    expandedContent.style.display = "none"; // Hide after animation
                }, 500); // Match this time with your CSS transition duration
            }
        });

        // Now expand or collapse the clicked project
        if (!isExpanded) {
            // Show additional content
            moreContent.style.display = "block"; // Make it block to get its height
            const fullHeight = moreContent.scrollHeight; // Get the full height
            moreContent.style.height = `${fullHeight}px`; // Set height to full content height
            projectInfo.classList.add('expanded'); // Add the expanded class
            projectCard.classList.add('active'); // Add active class to project card
            link.textContent = "Read Less"; // Change link text
        } else {
            // Hide additional content
            moreContent.style.height = `0`; // Collapse the content
            projectInfo.classList.remove('expanded'); // Remove the expanded class
            projectCard.classList.remove('active'); // Remove active class from project card
            link.textContent = "Read More"; // Change link text
            
            // Reset display after transition ends
            setTimeout(() => {
                moreContent.style.display = "none"; // Hide after animation
            }, 500); // Match this time with your CSS transition duration
        }

        // Force a reflow to apply the transition
        moreContent.offsetHeight; // This forces a reflow
    });
});



// Initialize the moreContent height to 0
document.querySelectorAll('.more-content').forEach(content => {
    content.style.height = '0';
    content.style.overflow = 'hidden'; // Ensure overflow is hidden to avoid content spilling out
});
