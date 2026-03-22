#!/usr/bin/env bash

set -euo pipefail

cleanup() {
  if [[ -n "${frontend_pid:-}" ]]; then
    kill "$frontend_pid" >/dev/null 2>&1 || true
  fi

  if [[ -n "${backend_pid:-}" ]]; then
    kill "$backend_pid" >/dev/null 2>&1 || true
  fi
}

trap cleanup EXIT INT TERM

npm --prefix frontend run start &
frontend_pid=$!

npm --prefix backend run start &
backend_pid=$!

wait "$frontend_pid" "$backend_pid"
