#!/bin/bash

echo "=== Web3 React 게시판 전체 실행 ==="
echo ""

# 현재 스크립트 위치를 기준으로 경로 설정
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 백엔드 실행 (백그라운드)
echo "Flask 백엔드 시작 중..."
cd "$SCRIPT_DIR/flask"
python app.py &
BACKEND_PID=$!

# 잠시 대기
sleep 3

# 프론트엔드 실행
echo "React 프론트엔드 시작 중..."
cd "$SCRIPT_DIR/react-board"
npm start

# 프론트엔드가 종료되면 백엔드도 종료
kill $BACKEND_PID 2>/dev/null 