// Initialize Three.js scene for 3D elements
function initThreeScene() {
	// This would be a more complex implementation in a real project
	console.log("3D scene initialized");
}

// Show notification badge
function showNotification() {
	const badge = document.getElementById('notificationBadge');
	badge.classList.add('show');
}

// Modal handling
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');
const communityModal = document.getElementById('communityModal');

// Sign up modal controls
const signupBtn = document.getElementById('signupBtn');
const closeSignupModal = document.getElementById('closeSignupModal');
const switchToLogin = document.getElementById('switchToLogin');

signupBtn.addEventListener('click', function() {
	signupModal.classList.add('show');
});

closeSignupModal.addEventListener('click', function() {
	signupModal.classList.remove('show');
});

switchToLogin.addEventListener('click', function() {
	signupModal.classList.remove('show');
	loginModal.classList.add('show');
});

// Login modal controls
const loginBtn = document.getElementById('loginBtn');
const closeLoginModal = document.getElementById('closeLoginModal');
const switchToSignup = document.getElementById('switchToSignup');

loginBtn.addEventListener('click', function() {
	loginModal.classList.add('show');
});

closeLoginModal.addEventListener('click', function() {
	loginModal.classList.remove('show');
});

switchToSignup.addEventListener('click', function() {
	loginModal.classList.remove('show');
	signupModal.classList.add('show');
});

// Community modal controls
const joinCommunityBtn = document.getElementById('joinCommunityBtn');
const closeCommunityModal = document.getElementById('closeCommunityModal');

joinCommunityBtn.addEventListener('click', function() {
	communityModal.classList.add('show');
});

closeCommunityModal.addEventListener('click', function() {
	communityModal.classList.remove('show');
});

// Form submission handling (to be connected to actual APIs later)
document.getElementById('signupForm').addEventListener('submit', function(e) {
	e.preventDefault();
	// This would connect to the backend in a real implementation
	alert("This is a prototype. In the full version, this would register a new user.");
	signupModal.classList.remove('show');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
	e.preventDefault();
	// This would connect to the backend in a real implementation
	alert("This is a prototype. In the full version, this would authenticate the user.");
	loginModal.classList.remove('show');
});

document.getElementById('communityForm').addEventListener('submit', function(e) {
	e.preventDefault();
	// This would connect to the backend in a real implementation
	alert("This is a prototype. In the full version, this would add you to our community.");
	communityModal.classList.remove('show');
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
	// Initialize Three.js scene
	initThreeScene();
	
	// Show notification after a delay
	setTimeout(showNotification, 3000);
	
	// Initialize GSAP animations
	if (typeof gsap !== 'undefined') {
	gsap.from('.hero-content h1', { 
		opacity: 0, 
		y: 50, 
		duration: 1, 
		ease: 'power3.out' 
	});
	
	gsap.from('.hero-content p', { 
		opacity: 0, 
		y: 30, 
		duration: 1, 
		delay: 0.3, 
		ease: 'power3.out' 
	});
	
	gsap.from('.btn-primary', { 
		opacity: 0, 
		y: 20, 
		duration: 1, 
		delay: 0.6, 
		ease: 'power3.out' 
	});
	}
});

// Close modals when clicking outside the modal content
window.addEventListener('click', function(event) {
	if (event.target === signupModal) {
	signupModal.classList.remove('show');
	}
	if (event.target === loginModal) {
	loginModal.classList.remove('show');
	}
	if (event.target === communityModal) {
	communityModal.classList.remove('show');
	}
});