FROM alpine:3.14

ENV FRP_VERSION 0.37.1

RUN apk add --no-cache wget \
    && wget https://github.com/fatedier/frp/releases/download/v${FRP_VERSION}/frp_${FRP_VERSION}_linux_amd64.tar.gz \
    && tar xzf frp_${FRP_VERSION}_linux_amd64.tar.gz \
    && mv frp_${FRP_VERSION}_linux_amd64 /usr/local/frp \
    && rm -rf frp_${FRP_VERSION}_linux_amd64.tar.gz \
    && apk del wget

COPY frps.ini /usr/local/frp/
WORKDIR /usr/local/frp

CMD ["/usr/local/frp/frps", "-c", "/usr/local/frp/frps.ini"]