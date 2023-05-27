define(["./when-b60132fc","./buildModuleUrl-57a32107","./Cartographic-3309dd0d","./Check-7b2a090c","./ComponentDatatype-c140a87d","./GeometryAttribute-c42d25b7","./GeometryAttributes-252e9929","./VertexFormat-6446fca0","./Cartesian2-47311507","./Math-119be1a3","./Matrix4-cde86d0e","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./FeatureDetection-c3b71206"],(function(e,t,a,r,n,o,i,u,m,p,c,y,s,l,b){"use strict";function d(t){t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT);var a=e.defaultValue(t.vertexFormat,u.VertexFormat.DEFAULT);this._vertexFormat=a,this._workerName="createPlaneGeometry"}d.packedLength=u.VertexFormat.packedLength,d.pack=function(t,a,r){return r=e.defaultValue(r,0),u.VertexFormat.pack(t._vertexFormat,a,r),a};var A=new u.VertexFormat,F={vertexFormat:A};d.unpack=function(t,a,r){a=e.defaultValue(a,0);var n=u.VertexFormat.unpack(t,a,A);return e.defined(r)?(r._vertexFormat=u.VertexFormat.clone(n,r._vertexFormat),r):new d(F)};var v=new a.Cartesian3(-.5,-.5,0),f=new a.Cartesian3(.5,.5,0);return d.createGeometry=function(e){var r,u,m=e._vertexFormat,p=new i.GeometryAttributes;if(m.position){if((u=new Float64Array(12))[0]=v.x,u[1]=v.y,u[2]=0,u[3]=f.x,u[4]=v.y,u[5]=0,u[6]=f.x,u[7]=f.y,u[8]=0,u[9]=v.x,u[10]=f.y,u[11]=0,p.position=new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u}),m.normal){var c=new Float32Array(12);c[0]=0,c[1]=0,c[2]=1,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=1,c[9]=0,c[10]=0,c[11]=1,p.normal=new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:c})}if(m.st){var y=new Float32Array(8);y[0]=0,y[1]=0,y[2]=1,y[3]=0,y[4]=1,y[5]=1,y[6]=0,y[7]=1,p.st=new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:y})}if(m.tangent){var s=new Float32Array(12);s[0]=1,s[1]=0,s[2]=0,s[3]=1,s[4]=0,s[5]=0,s[6]=1,s[7]=0,s[8]=0,s[9]=1,s[10]=0,s[11]=0,p.tangent=new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:s})}if(m.bitangent){var l=new Float32Array(12);l[0]=0,l[1]=1,l[2]=0,l[3]=0,l[4]=1,l[5]=0,l[6]=0,l[7]=1,l[8]=0,l[9]=0,l[10]=1,l[11]=0,p.bitangent=new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:l})}(r=new Uint16Array(6))[0]=0,r[1]=1,r[2]=2,r[3]=0,r[4]=2,r[5]=3}return new o.Geometry({attributes:p,indices:r,primitiveType:t.PrimitiveType.TRIANGLES,boundingSphere:new t.BoundingSphere(a.Cartesian3.ZERO,Math.sqrt(2))})},function(t,a){return e.defined(a)&&(t=d.unpack(t,a)),d.createGeometry(t)}}));
