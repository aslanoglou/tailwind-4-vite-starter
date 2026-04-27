ARG BASE_IMAGE
FROM $BASE_IMAGE

# Install latest Node 22 (σταθερό και συμβατό με Vite/Tailwind)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
  && apt-get update \
  && apt-get install -y nodejs \
  && apt-get clean

# Update npm στην latest stable
RUN npm install -g npm@latest

# Verify (optional αλλά χρήσιμο στο build logs)
RUN node -v && npm -v