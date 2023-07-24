# Use the official Nginx base image
FROM nginx

# Install required build tools
RUN apt-get update && \
    apt-get install -y --no-install-recommends curl gcc make libc-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Download ngx_cache_purge source code and compile it
RUN curl -fSL http://labs.frickle.com/files/ngx_cache_purge-2.3.tar.gz -o ngx_cache_purge-2.3.tar.gz && \
    tar -xzf ngx_cache_purge-2.3.tar.gz && \
    rm ngx_cache_purge-2.3.tar.gz && \
    cd ngx_cache_purge-2.3 && \
    make modules && \
    cp objs/ngx_http_cache_purge_module.so /etc/nginx/modules/ngx_http_cache_purge_module.so && \
    cd .. && \
    rm -rf ngx_cache_purge-2.3

# Copy the default Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80
