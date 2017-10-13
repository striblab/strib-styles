FROM node:7

# Install Ruby.
# https://github.com/dockerfile/ruby/blob/master/Dockerfile
RUN \
  apt-get update -qq && \
  apt-get install -y ruby ruby-dev build-essential

# Install bundler
RUN gem install bundler

# Install node globals
RUN npm install gulp -g

# Expose browsersync ports
EXPOSE 3000
EXPOSE 3001

# Project space
RUN mkdir /src
WORKDIR /src

# Install ruby Dependencies
ENV BUNDLE_PATH /bundles

# Make gulp our command
ENTRYPOINT ["bash", "./scripts/docker-start.sh"]
