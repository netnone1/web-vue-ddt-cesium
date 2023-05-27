define(["./when-b60132fc","./Cartesian2-47311507","./arrayFill-4513d7ad","./buildModuleUrl-57a32107","./Cartographic-3309dd0d","./Check-7b2a090c","./ComponentDatatype-c140a87d","./GeometryAttribute-c42d25b7","./GeometryAttributes-252e9929","./GeometryInstance-dbc9f4c4","./GeometryOffsetAttribute-fbeb6f1a","./GeometryPipeline-6d9322f0","./IndexDatatype-8a5eead4","./Math-119be1a3","./Matrix4-cde86d0e","./PolygonPipeline-805ba13c","./RectangleGeometryLibrary-2077f0a4","./VertexFormat-6446fca0","./WebGLConstants-4ae0db90","./RuntimeError-4a5c8994","./FeatureDetection-c3b71206","./Cartesian4-3ca25aab","./AttributeCompression-90851096","./EncodedCartesian3-f1396b05","./IntersectionTests-5e35c2ab","./Plane-ca0357f4","./earcut-2.2.1-20c8012f","./EllipsoidRhumbLine-ed1a6bf4"],(function(t,e,a,r,n,i,o,s,l,u,c,m,d,p,g,y,f,h,v,b,_,A,x,w,C,R,F,E){"use strict";var G=new n.Cartesian3,P=new n.Cartesian3,V=new n.Cartesian3,L=new n.Cartesian3,D=new e.Rectangle,M=new e.Cartesian2,O=new r.BoundingSphere,T=new r.BoundingSphere;function N(t,e){var a=new s.Geometry({attributes:new l.GeometryAttributes,primitiveType:r.PrimitiveType.TRIANGLES});return a.attributes.position=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e.positions}),t.normal&&(a.attributes.normal=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.normals})),t.tangent&&(a.attributes.tangent=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.tangents})),t.bitangent&&(a.attributes.bitangent=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.bitangents})),a}var S=new n.Cartesian3,I=new n.Cartesian3;function k(t,e){var a=t._vertexFormat,r=t._ellipsoid,i=e.height,l=e.width,u=e.northCap,c=e.southCap,m=0,p=i,y=i,h=0;u&&(m=1,y-=1,h+=1),c&&(p-=1,y-=1,h+=1),h+=l*y;for(var v=a.position?new Float64Array(3*h):void 0,b=a.st?new Float32Array(2*h):void 0,_=0,A=0,x=G,w=M,C=Number.MAX_VALUE,R=Number.MAX_VALUE,F=-Number.MAX_VALUE,E=-Number.MAX_VALUE,D=m;D<p;++D)for(var O=0;O<l;++O)f.RectangleGeometryLibrary.computePosition(e,r,a.st,D,O,x,w),v[_++]=x.x,v[_++]=x.y,v[_++]=x.z,a.st&&(b[A++]=w.x,b[A++]=w.y,C=Math.min(C,w.x),R=Math.min(R,w.y),F=Math.max(F,w.x),E=Math.max(E,w.y));if(u&&(f.RectangleGeometryLibrary.computePosition(e,r,a.st,0,0,x,w),v[_++]=x.x,v[_++]=x.y,v[_++]=x.z,a.st&&(b[A++]=w.x,b[A++]=w.y,C=w.x,R=w.y,F=w.x,E=w.y)),c&&(f.RectangleGeometryLibrary.computePosition(e,r,a.st,i-1,0,x,w),v[_++]=x.x,v[_++]=x.y,v[_]=x.z,a.st&&(b[A++]=w.x,b[A]=w.y,C=Math.min(C,w.x),R=Math.min(R,w.y),F=Math.max(F,w.x),E=Math.max(E,w.y))),a.st&&(C<0||R<0||F>1||E>1))for(var T=0;T<b.length;T+=2)b[T]=(b[T]-C)/(F-C),b[T+1]=(b[T+1]-R)/(E-R);var S=function(t,e,a,r){var i=t.length,o=e.normal?new Float32Array(i):void 0,s=e.tangent?new Float32Array(i):void 0,l=e.bitangent?new Float32Array(i):void 0,u=0,c=L,m=V,d=P;if(e.normal||e.tangent||e.bitangent)for(var p=0;p<i;p+=3){var y=n.Cartesian3.fromArray(t,p,G),f=u+1,h=u+2;d=a.geodeticSurfaceNormal(y,d),(e.tangent||e.bitangent)&&(n.Cartesian3.cross(n.Cartesian3.UNIT_Z,d,m),g.Matrix3.multiplyByVector(r,m,m),n.Cartesian3.normalize(m,m),e.bitangent&&n.Cartesian3.normalize(n.Cartesian3.cross(d,m,c),c)),e.normal&&(o[u]=d.x,o[f]=d.y,o[h]=d.z),e.tangent&&(s[u]=m.x,s[f]=m.y,s[h]=m.z),e.bitangent&&(l[u]=c.x,l[f]=c.y,l[h]=c.z),u+=3}return N(e,{positions:t,normals:o,tangents:s,bitangents:l})}(v,a,r,e.tangentRotationMatrix),I=6*(l-1)*(y-1);u&&(I+=3*(l-1)),c&&(I+=3*(l-1));var k,H=d.IndexDatatype.createTypedArray(h,I),z=0,U=0;for(k=0;k<y-1;++k){for(var B=0;B<l-1;++B){var Y=z,q=Y+l,X=q+1,Q=Y+1;H[U++]=Y,H[U++]=q,H[U++]=Q,H[U++]=Q,H[U++]=q,H[U++]=X,++z}++z}if(u||c){var W,J,j=h-1,Z=h-1;if(u&&c&&(j=h-2),z=0,u)for(k=0;k<l-1;k++)J=(W=z)+1,H[U++]=j,H[U++]=W,H[U++]=J,++z;if(c)for(z=(y-1)*l,k=0;k<l-1;k++)J=(W=z)+1,H[U++]=W,H[U++]=Z,H[U++]=J,++z}return S.indices=H,a.st&&(S.attributes.st=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:b})),S}function H(t,e,a,r,n){return t[e++]=r[a],t[e++]=r[a+1],t[e++]=r[a+2],t[e++]=n[a],t[e++]=n[a+1],t[e]=n[a+2],t}function z(t,e,a,r){return t[e++]=r[a],t[e++]=r[a+1],t[e++]=r[a],t[e]=r[a+1],t}var U=new h.VertexFormat;function B(e,r){var i,l=e._shadowVolume,g=e._offsetAttribute,f=e._vertexFormat,v=e._extrudedHeight,b=e._surfaceHeight,_=e._ellipsoid,A=r.height,x=r.width;if(l){var w=h.VertexFormat.clone(f,U);w.normal=!0,e._vertexFormat=w}var C=k(e,r);l&&(e._vertexFormat=f);var R=y.PolygonPipeline.scaleToGeodeticHeight(C.attributes.position.values,b,_,!1),F=(R=new Float64Array(R)).length,E=2*F,D=new Float64Array(E);D.set(R);var M=y.PolygonPipeline.scaleToGeodeticHeight(C.attributes.position.values,v,_);D.set(M,F),C.attributes.position.values=D;var O,T,B,Y=f.normal?new Float32Array(E):void 0,q=f.tangent?new Float32Array(E):void 0,X=f.bitangent?new Float32Array(E):void 0,Q=f.st?new Float32Array(E/3*2):void 0;if(f.normal){for(T=C.attributes.normal.values,Y.set(T),i=0;i<F;i++)T[i]=-T[i];Y.set(T,F),C.attributes.normal.values=Y}if(l){T=C.attributes.normal.values,f.normal||(C.attributes.normal=void 0);var W=new Float32Array(E);for(i=0;i<F;i++)T[i]=-T[i];W.set(T,F),C.attributes.extrudeDirection=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:W})}var J=t.defined(g);if(J){var j=F/3*2,Z=new Uint8Array(j);g===c.GeometryOffsetAttribute.TOP?Z=a.arrayFill(Z,1,0,j/2):(B=g===c.GeometryOffsetAttribute.NONE?0:1,Z=a.arrayFill(Z,B)),C.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:Z})}if(f.tangent){var K=C.attributes.tangent.values;for(q.set(K),i=0;i<F;i++)K[i]=-K[i];q.set(K,F),C.attributes.tangent.values=q}if(f.bitangent){var $=C.attributes.bitangent.values;X.set($),X.set($,F),C.attributes.bitangent.values=X}f.st&&(O=C.attributes.st.values,Q.set(O),Q.set(O,F/3*2),C.attributes.st.values=Q);var tt=C.indices,et=tt.length,at=F/3,rt=d.IndexDatatype.createTypedArray(E/3,2*et);for(rt.set(tt),i=0;i<et;i+=3)rt[i+et]=tt[i+2]+at,rt[i+1+et]=tt[i+1]+at,rt[i+2+et]=tt[i]+at;C.indices=rt;var nt=r.northCap,it=r.southCap,ot=A,st=2,lt=0,ut=4,ct=4;nt&&(st-=1,ot-=1,lt+=1,ut-=2,ct-=1),it&&(st-=1,ot-=1,lt+=1,ut-=2,ct-=1);var mt=2*((lt+=st*x+2*ot-ut)+ct),dt=new Float64Array(3*mt),pt=l?new Float32Array(3*mt):void 0,gt=J?new Uint8Array(mt):void 0,yt=f.st?new Float32Array(2*mt):void 0,ft=g===c.GeometryOffsetAttribute.TOP;J&&!ft&&(B=g===c.GeometryOffsetAttribute.ALL?1:0,gt=a.arrayFill(gt,B));var ht,vt=0,bt=0,_t=0,At=0,xt=x*ot;for(i=0;i<xt;i+=x)dt=H(dt,vt,ht=3*i,R,M),vt+=6,f.st&&(yt=z(yt,bt,2*i,O),bt+=4),l&&(_t+=3,pt[_t++]=T[ht],pt[_t++]=T[ht+1],pt[_t++]=T[ht+2]),ft&&(gt[At++]=1,At+=1);if(it){var wt=nt?xt+1:xt;for(ht=3*wt,i=0;i<2;i++)dt=H(dt,vt,ht,R,M),vt+=6,f.st&&(yt=z(yt,bt,2*wt,O),bt+=4),l&&(_t+=3,pt[_t++]=T[ht],pt[_t++]=T[ht+1],pt[_t++]=T[ht+2]),ft&&(gt[At++]=1,At+=1)}else for(i=xt-x;i<xt;i++)dt=H(dt,vt,ht=3*i,R,M),vt+=6,f.st&&(yt=z(yt,bt,2*i,O),bt+=4),l&&(_t+=3,pt[_t++]=T[ht],pt[_t++]=T[ht+1],pt[_t++]=T[ht+2]),ft&&(gt[At++]=1,At+=1);for(i=xt-1;i>0;i-=x)dt=H(dt,vt,ht=3*i,R,M),vt+=6,f.st&&(yt=z(yt,bt,2*i,O),bt+=4),l&&(_t+=3,pt[_t++]=T[ht],pt[_t++]=T[ht+1],pt[_t++]=T[ht+2]),ft&&(gt[At++]=1,At+=1);if(nt){var Ct=xt;for(ht=3*Ct,i=0;i<2;i++)dt=H(dt,vt,ht,R,M),vt+=6,f.st&&(yt=z(yt,bt,2*Ct,O),bt+=4),l&&(_t+=3,pt[_t++]=T[ht],pt[_t++]=T[ht+1],pt[_t++]=T[ht+2]),ft&&(gt[At++]=1,At+=1)}else for(i=x-1;i>=0;i--)dt=H(dt,vt,ht=3*i,R,M),vt+=6,f.st&&(yt=z(yt,bt,2*i,O),bt+=4),l&&(_t+=3,pt[_t++]=T[ht],pt[_t++]=T[ht+1],pt[_t++]=T[ht+2]),ft&&(gt[At++]=1,At+=1);var Rt=function(t,e,a){var r=t.length,i=e.normal?new Float32Array(r):void 0,o=e.tangent?new Float32Array(r):void 0,s=e.bitangent?new Float32Array(r):void 0,l=0,u=0,c=0,m=!0,d=L,g=V,y=P;if(e.normal||e.tangent||e.bitangent)for(var f=0;f<r;f+=6){var h=n.Cartesian3.fromArray(t,f,G),v=n.Cartesian3.fromArray(t,(f+6)%r,S);if(m){var b=n.Cartesian3.fromArray(t,(f+3)%r,I);n.Cartesian3.subtract(v,h,v),n.Cartesian3.subtract(b,h,b),y=n.Cartesian3.normalize(n.Cartesian3.cross(b,v,y),y),m=!1}n.Cartesian3.equalsEpsilon(v,h,p.CesiumMath.EPSILON10)&&(m=!0),(e.tangent||e.bitangent)&&(d=a.geodeticSurfaceNormal(h,d),e.tangent&&(g=n.Cartesian3.normalize(n.Cartesian3.cross(d,y,g),g))),e.normal&&(i[l++]=y.x,i[l++]=y.y,i[l++]=y.z,i[l++]=y.x,i[l++]=y.y,i[l++]=y.z),e.tangent&&(o[u++]=g.x,o[u++]=g.y,o[u++]=g.z,o[u++]=g.x,o[u++]=g.y,o[u++]=g.z),e.bitangent&&(s[c++]=d.x,s[c++]=d.y,s[c++]=d.z,s[c++]=d.x,s[c++]=d.y,s[c++]=d.z)}return N(e,{positions:t,normals:i,tangents:o,bitangents:s})}(dt,f,_);f.st&&(Rt.attributes.st=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:yt})),l&&(Rt.attributes.extrudeDirection=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:pt})),J&&(Rt.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:gt}));var Ft,Et,Gt,Pt,Vt=d.IndexDatatype.createTypedArray(mt,6*lt);F=dt.length/3;var Lt=0;for(i=0;i<F-1;i+=2){Pt=((Ft=i)+2)%F;var Dt=n.Cartesian3.fromArray(dt,3*Ft,S),Mt=n.Cartesian3.fromArray(dt,3*Pt,I);n.Cartesian3.equalsEpsilon(Dt,Mt,p.CesiumMath.EPSILON10)||(Gt=((Et=(Ft+1)%F)+2)%F,Vt[Lt++]=Ft,Vt[Lt++]=Et,Vt[Lt++]=Pt,Vt[Lt++]=Pt,Vt[Lt++]=Et,Vt[Lt++]=Gt)}return Rt.indices=Vt,(Rt=m.GeometryPipeline.combineInstances([new u.GeometryInstance({geometry:C}),new u.GeometryInstance({geometry:Rt})]))[0]}var Y=[new n.Cartesian3,new n.Cartesian3,new n.Cartesian3,new n.Cartesian3],q=new n.Cartographic,X=new n.Cartographic;function Q(t,a,r,n,i){if(0===r)return e.Rectangle.clone(t,i);var o=f.RectangleGeometryLibrary.computeOptions(t,a,r,0,D,q),s=o.height,l=o.width,u=Y;return f.RectangleGeometryLibrary.computePosition(o,n,!1,0,0,u[0]),f.RectangleGeometryLibrary.computePosition(o,n,!1,0,l-1,u[1]),f.RectangleGeometryLibrary.computePosition(o,n,!1,s-1,0,u[2]),f.RectangleGeometryLibrary.computePosition(o,n,!1,s-1,l-1,u[3]),e.Rectangle.fromCartesianArray(u,n,i)}function W(a){var r=(a=t.defaultValue(a,t.defaultValue.EMPTY_OBJECT)).rectangle,n=t.defaultValue(a.height,0),i=t.defaultValue(a.extrudedHeight,n);this._rectangle=e.Rectangle.clone(r),this._granularity=t.defaultValue(a.granularity,p.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=e.Ellipsoid.clone(t.defaultValue(a.ellipsoid,e.Ellipsoid.WGS84)),this._surfaceHeight=Math.max(n,i),this._rotation=t.defaultValue(a.rotation,0),this._stRotation=t.defaultValue(a.stRotation,0),this._vertexFormat=h.VertexFormat.clone(t.defaultValue(a.vertexFormat,h.VertexFormat.DEFAULT)),this._extrudedHeight=Math.min(n,i),this._shadowVolume=t.defaultValue(a.shadowVolume,!1),this._workerName="createRectangleGeometry",this._offsetAttribute=a.offsetAttribute,this._rotatedRectangle=void 0,this._textureCoordinateRotationPoints=void 0}W.packedLength=e.Rectangle.packedLength+e.Ellipsoid.packedLength+h.VertexFormat.packedLength+7,W.pack=function(a,r,n){return n=t.defaultValue(n,0),e.Rectangle.pack(a._rectangle,r,n),n+=e.Rectangle.packedLength,e.Ellipsoid.pack(a._ellipsoid,r,n),n+=e.Ellipsoid.packedLength,h.VertexFormat.pack(a._vertexFormat,r,n),n+=h.VertexFormat.packedLength,r[n++]=a._granularity,r[n++]=a._surfaceHeight,r[n++]=a._rotation,r[n++]=a._stRotation,r[n++]=a._extrudedHeight,r[n++]=a._shadowVolume?1:0,r[n]=t.defaultValue(a._offsetAttribute,-1),r};var J=new e.Rectangle,j=e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),Z={rectangle:J,ellipsoid:j,vertexFormat:U,granularity:void 0,height:void 0,rotation:void 0,stRotation:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};W.unpack=function(a,r,n){r=t.defaultValue(r,0);var i=e.Rectangle.unpack(a,r,J);r+=e.Rectangle.packedLength;var o=e.Ellipsoid.unpack(a,r,j);r+=e.Ellipsoid.packedLength;var s=h.VertexFormat.unpack(a,r,U);r+=h.VertexFormat.packedLength;var l=a[r++],u=a[r++],c=a[r++],m=a[r++],d=a[r++],p=1===a[r++],g=a[r];return t.defined(n)?(n._rectangle=e.Rectangle.clone(i,n._rectangle),n._ellipsoid=e.Ellipsoid.clone(o,n._ellipsoid),n._vertexFormat=h.VertexFormat.clone(s,n._vertexFormat),n._granularity=l,n._surfaceHeight=u,n._rotation=c,n._stRotation=m,n._extrudedHeight=d,n._shadowVolume=p,n._offsetAttribute=-1===g?void 0:g,n):(Z.granularity=l,Z.height=u,Z.rotation=c,Z.stRotation=m,Z.extrudedHeight=d,Z.shadowVolume=p,Z.offsetAttribute=-1===g?void 0:g,new W(Z))},W.computeRectangle=function(a,r){var n=(a=t.defaultValue(a,t.defaultValue.EMPTY_OBJECT)).rectangle,i=t.defaultValue(a.granularity,p.CesiumMath.RADIANS_PER_DEGREE),o=t.defaultValue(a.ellipsoid,e.Ellipsoid.WGS84);return Q(n,i,t.defaultValue(a.rotation,0),o,r)};var K=new g.Matrix3,$=new s.Quaternion,tt=new n.Cartographic;W.createGeometry=function(n){if(!p.CesiumMath.equalsEpsilon(n._rectangle.north,n._rectangle.south,p.CesiumMath.EPSILON10)&&!p.CesiumMath.equalsEpsilon(n._rectangle.east,n._rectangle.west,p.CesiumMath.EPSILON10)){var i=n._rectangle,l=n._ellipsoid,u=n._rotation,m=n._stRotation,d=n._vertexFormat,h=f.RectangleGeometryLibrary.computeOptions(i,n._granularity,u,m,D,q,X),v=K;if(0!==m||0!==u){var b=e.Rectangle.center(i,tt),_=l.geodeticSurfaceNormalCartographic(b,S);s.Quaternion.fromAxisAngle(_,-m,$),g.Matrix3.fromQuaternion($,v)}else g.Matrix3.clone(g.Matrix3.IDENTITY,v);var A,x,w=n._surfaceHeight,C=n._extrudedHeight,R=!p.CesiumMath.equalsEpsilon(w,C,0,p.CesiumMath.EPSILON2);if(h.lonScalar=1/n._rectangle.width,h.latScalar=1/n._rectangle.height,h.tangentRotationMatrix=v,i=n._rectangle,R){A=B(n,h);var F=r.BoundingSphere.fromRectangle3D(i,l,w,T),E=r.BoundingSphere.fromRectangle3D(i,l,C,O);x=r.BoundingSphere.union(F,E)}else{if((A=k(n,h)).attributes.position.values=y.PolygonPipeline.scaleToGeodeticHeight(A.attributes.position.values,w,l,!1),t.defined(n._offsetAttribute)){var G=A.attributes.position.values.length,P=new Uint8Array(G/3),V=n._offsetAttribute===c.GeometryOffsetAttribute.NONE?0:1;a.arrayFill(P,V),A.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:P})}x=r.BoundingSphere.fromRectangle3D(i,l,w)}return d.position||delete A.attributes.position,new s.Geometry({attributes:A.attributes,indices:A.indices,primitiveType:A.primitiveType,boundingSphere:x,offsetAttribute:n._offsetAttribute})}},W.createShadowVolume=function(t,e,a){var r=t._granularity,n=t._ellipsoid,i=e(r,n),o=a(r,n);return new W({rectangle:t._rectangle,rotation:t._rotation,ellipsoid:n,stRotation:t._stRotation,granularity:r,extrudedHeight:o,height:i,vertexFormat:h.VertexFormat.POSITION_ONLY,shadowVolume:!0})};var et=new e.Rectangle,at=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],rt=new s.Matrix2,nt=new n.Cartographic;return Object.defineProperties(W.prototype,{rectangle:{get:function(){return t.defined(this._rotatedRectangle)||(this._rotatedRectangle=Q(this._rectangle,this._granularity,this._rotation,this._ellipsoid)),this._rotatedRectangle}},textureCoordinateRotationPoints:{get:function(){return t.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(t){if(0===t._stRotation)return[0,0,0,1,1,0];var a=e.Rectangle.clone(t._rectangle,et),r=t._granularity,n=t._ellipsoid,i=Q(a,r,t._rotation-t._stRotation,n,et),o=at;o[0].x=i.west,o[0].y=i.south,o[1].x=i.west,o[1].y=i.north,o[2].x=i.east,o[2].y=i.south;for(var l=t.rectangle,u=s.Matrix2.fromRotation(t._stRotation,rt),c=e.Rectangle.center(l,nt),m=0;m<3;++m){var d=o[m];d.x-=c.longitude,d.y-=c.latitude,s.Matrix2.multiplyByVector(u,d,d),d.x+=c.longitude,d.y+=c.latitude,d.x=(d.x-l.west)/l.width,d.y=(d.y-l.south)/l.height}var p=o[0],g=o[1],y=o[2],f=new Array(6);return e.Cartesian2.pack(p,f),e.Cartesian2.pack(g,f,2),e.Cartesian2.pack(y,f,4),f}(this)),this._textureCoordinateRotationPoints}}}),function(a,r){return t.defined(r)&&(a=W.unpack(a,r)),a._ellipsoid=e.Ellipsoid.clone(a._ellipsoid),a._rectangle=e.Rectangle.clone(a._rectangle),W.createGeometry(a)}}));
