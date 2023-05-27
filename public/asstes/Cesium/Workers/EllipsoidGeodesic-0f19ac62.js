define(["exports","./Cartographic-3309dd0d","./Check-7b2a090c","./when-b60132fc","./Cartesian2-47311507","./Math-119be1a3"],(function(t,a,i,n,e,s){"use strict";function r(t,a,i,n,e,s,r){var h=function(t,a){return t*a*(4+t*(4-3*a))/16}(t,i);return(1-h)*t*a*(n+h*e*(r+h*s*(2*r*r-1)))}var h=new a.Cartesian3,o=new a.Cartesian3;function d(t,i,n,e){a.Cartesian3.normalize(e.cartographicToCartesian(i,o),h),a.Cartesian3.normalize(e.cartographicToCartesian(n,o),o),function(t,a,i,n,e,h,o){var d,c,u,M,g,l=(a-i)/a,_=h-n,p=Math.atan((1-l)*Math.tan(e)),f=Math.atan((1-l)*Math.tan(o)),v=Math.cos(p),m=Math.sin(p),C=Math.cos(f),H=Math.sin(f),O=v*C,S=v*H,q=m*H,b=m*C,U=_,w=s.CesiumMath.TWO_PI,A=Math.cos(U),R=Math.sin(U);do{A=Math.cos(U),R=Math.sin(U);var y,E=S-b*A;u=Math.sqrt(C*C*R*R+E*E),c=q+O*A,d=Math.atan2(u,c),0===u?(y=0,M=1):M=1-(y=O*R/u)*y,w=U,g=c-2*q/M,isNaN(g)&&(g=0),U=_+r(l,y,M,d,u,c,g)}while(Math.abs(U-w)>s.CesiumMath.EPSILON12);var P=M*(a*a-i*i)/(i*i),x=P*(256+P*(P*(74-47*P)-128))/1024,D=g*g,N=i*(1+P*(4096+P*(P*(320-175*P)-768))/16384)*(d-x*u*(g+x*(c*(2*D-1)-x*g*(4*u*u-3)*(4*D-3)/6)/4)),T=Math.atan2(C*R,S-b*A),z=Math.atan2(v*R,S*A-b);t._distance=N,t._startHeading=T,t._endHeading=z,t._uSquared=P}(t,e.maximumRadius,e.minimumRadius,i.longitude,i.latitude,n.longitude,n.latitude),t._start=a.Cartographic.clone(i,t._start),t._end=a.Cartographic.clone(n,t._end),t._start.height=0,t._end.height=0,function(t){var a=t._uSquared,i=t._ellipsoid.maximumRadius,n=t._ellipsoid.minimumRadius,e=(i-n)/i,s=Math.cos(t._startHeading),r=Math.sin(t._startHeading),h=(1-e)*Math.tan(t._start.latitude),o=1/Math.sqrt(1+h*h),d=o*h,c=Math.atan2(h,s),u=o*r,M=u*u,g=1-M,l=Math.sqrt(g),_=a/4,p=_*_,f=p*_,v=p*p,m=1+_-3*p/4+5*f/4-175*v/64,C=1-_+15*p/8-35*f/8,H=1-3*_+35*p/4,O=1-5*_,S=m*c-C*Math.sin(2*c)*_/2-H*Math.sin(4*c)*p/16-O*Math.sin(6*c)*f/48-5*Math.sin(8*c)*v/512,q=t._constants;q.a=i,q.b=n,q.f=e,q.cosineHeading=s,q.sineHeading=r,q.tanU=h,q.cosineU=o,q.sineU=d,q.sigma=c,q.sineAlpha=u,q.sineSquaredAlpha=M,q.cosineSquaredAlpha=g,q.cosineAlpha=l,q.u2Over4=_,q.u4Over16=p,q.u6Over64=f,q.u8Over256=v,q.a0=m,q.a1=C,q.a2=H,q.a3=O,q.distanceRatio=S}(t)}function c(t,i,s){var r=n.defaultValue(s,e.Ellipsoid.WGS84);this._ellipsoid=r,this._start=new a.Cartographic,this._end=new a.Cartographic,this._constants={},this._startHeading=void 0,this._endHeading=void 0,this._distance=void 0,this._uSquared=void 0,n.defined(t)&&n.defined(i)&&d(this,t,i,r)}Object.defineProperties(c.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},startHeading:{get:function(){return this._startHeading}},endHeading:{get:function(){return this._endHeading}}}),c.prototype.setEndPoints=function(t,a){d(this,t,a,this._ellipsoid)},c.prototype.interpolateUsingFraction=function(t,a){return this.interpolateUsingSurfaceDistance(this._distance*t,a)},c.prototype.interpolateUsingSurfaceDistance=function(t,i){var e=this._constants,s=e.distanceRatio+t/e.b,h=Math.cos(2*s),o=Math.cos(4*s),d=Math.cos(6*s),c=Math.sin(2*s),u=Math.sin(4*s),M=Math.sin(6*s),g=Math.sin(8*s),l=s*s,_=s*l,p=e.u8Over256,f=e.u2Over4,v=e.u6Over64,m=e.u4Over16,C=2*_*p*h/3+s*(1-f+7*m/4-15*v/4+579*p/64-(m-15*v/4+187*p/16)*h-(5*v/4-115*p/16)*o-29*p*d/16)+(f/2-m+71*v/32-85*p/16)*c+(5*m/16-5*v/4+383*p/96)*u-l*((v-11*p/2)*c+5*p*u/2)+(29*v/96-29*p/16)*M+539*p*g/1536,H=Math.asin(Math.sin(C)*e.cosineAlpha),O=Math.atan(e.a/e.b*Math.tan(H));C-=e.sigma;var S=Math.cos(2*e.sigma+C),q=Math.sin(C),b=Math.cos(C),U=e.cosineU*b,w=e.sineU*q,A=Math.atan2(q*e.sineHeading,U-w*e.cosineHeading)-r(e.f,e.sineAlpha,e.cosineSquaredAlpha,C,q,b,S);return n.defined(i)?(i.longitude=this._start.longitude+A,i.latitude=O,i.height=0,i):new a.Cartographic(this._start.longitude+A,O,0)},t.EllipsoidGeodesic=c}));
