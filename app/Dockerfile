FROM ruby:3.2.2-bullseye

WORKDIR /app/blog
RUN apt update && apt install -y build-essential sqlite3
RUN gem install rails
COPY start.sh /
ENTRYPOINT ["/start.sh"]
# CMD ["tail", "-f", "/dev/null"]
