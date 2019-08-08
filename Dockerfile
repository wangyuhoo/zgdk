FROM registry.cn-qingdao.aliyuncs.com/hncg/nginx:released

MAINTAINER hncg <checgg@gmail.com>

ADD ./dist /var/www/service

ADD ./nginx.conf /var/www/service

ADD ./MP_verify_rmf2j7fwzS1Rd39j.txt /var/www/service
ADD ./MP_verify_FEPZ7XLsNRyTIHgo.txt /var/www/service

RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log

CMD nginx "-g daemon off;"
