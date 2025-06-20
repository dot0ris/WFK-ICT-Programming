Web Programming Class 2: HTML + CSS (Connected to Flask API)

Objective:
- Build a front-end board that connects to the Flask backend API created in Web Class 1.
- Use provided HTML structure and customize with CSS styles.

Backend Endpoint (from Class 1):
GET /api/posts     		→ load post list
POST /api/posts    		→ submit new post
PUT /api/posts/{{ id }} 	→ edit exising post
DELETE /api/posts/{{ id }}    	→ remove post

File Structure:
- starter.html: Board layout with form and script to fetch/submit data
- style.css: CSS file to style the page
