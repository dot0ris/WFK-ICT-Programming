# ✅ app.py
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # React와 연동할 때 CORS 오류 방지

# 데이터 시뮬레이션
posts = [
    {"id": 1, "title": "Hello", "content": "Welcome to Flask!"},
    {"id": 2, "title": "Olá", "content": "Bem-vindo ao Flask!"}
]

@app.route("/api/posts", methods=["GET"])
def get_posts():
    return jsonify(posts)

@app.route("/api/posts", methods=["POST"])
def create_post():
    data = request.get_json()
    new_id = len(posts) + 1
    new_post = {"id": new_id, "title": data["title"], "content": data["content"]}
    posts.append(new_post)
    return jsonify(new_post), 201

@app.route("/api/posts/<int:post_id>", methods=["PUT"])
def update_post(post_id):
    data = request.get_json()
    for post in posts:
        if post["id"] == post_id:
            post["title"] = data.get("title", post["title"])
            post["content"] = data.get("content", post["content"])
            return jsonify(post)
    return jsonify({"error": "Post not found"}), 404

@app.route("/api/posts/<int:post_id>", methods=["DELETE"])
def delete_post(post_id):
    global posts
    posts = [post for post in posts if post["id"] != post_id]
    return jsonify({"message": "Deleted successfully"})

if __name__ == "__main__":
    app.run(debug=True)
