FROM cypress/included:13.4.0
WORKDIR /app
COPY . /app
RUN npm install
RUN npx cypress verify
CMD ["npx", "cypress", "run"]