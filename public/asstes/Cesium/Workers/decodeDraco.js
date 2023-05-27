define(["./ComponentDatatype-c140a87d","./when-b60132fc","./IndexDatatype-8a5eead4","./RuntimeError-4a5c8994","./createTaskProcessorWorker","./Check-7b2a090c","./WebGLConstants-4ae0db90","./Math-119be1a3"],(function(e,r,t,n,a,o,i,u){"use strict";var s;function d(e,r){for(var n=e.num_points(),a=e.num_faces(),o=new s.DracoInt32Array,i=3*a,u=t.IndexDatatype.createTypedArray(n,i),d=0,c=0;c<a;++c)r.GetFaceFromMesh(e,c,o),u[d+0]=o.GetValue(0),u[d+1]=o.GetValue(1),u[d+2]=o.GetValue(2),d+=3;return s.destroy(o),{typedArray:u,numberOfIndices:i}}function c(t,n,a){var o,i=t.num_points(),u=a.num_components(),d=new s.AttributeQuantizationTransform;if(d.InitFromAttribute(a)){for(var c=new Array(u),y=0;y<u;++y)c[y]=d.min_value(y);o={quantizationBits:d.quantization_bits(),minValues:c,range:d.range(),octEncoded:!1}}s.destroy(d),(d=new s.AttributeOctahedronTransform).InitFromAttribute(a)&&(o={quantizationBits:d.quantization_bits(),octEncoded:!0}),s.destroy(d);var f,A=i*u;f=r.defined(o)?function(e,r,t,n,a){var o,i;n.quantizationBits<=8?(i=new s.DracoUInt8Array,o=new Uint8Array(a),r.GetAttributeUInt8ForAllPoints(e,t,i)):(i=new s.DracoUInt16Array,o=new Uint16Array(a),r.GetAttributeUInt16ForAllPoints(e,t,i));for(var u=0;u<a;++u)o[u]=i.GetValue(u);return s.destroy(i),o}(t,n,a,o,A):function(e,r,t,n){var a,o;switch(t.data_type()){case 1:case 11:o=new s.DracoInt8Array,a=new Int8Array(n),r.GetAttributeInt8ForAllPoints(e,t,o);break;case 2:o=new s.DracoUInt8Array,a=new Uint8Array(n),r.GetAttributeUInt8ForAllPoints(e,t,o);break;case 3:o=new s.DracoInt16Array,a=new Int16Array(n),r.GetAttributeInt16ForAllPoints(e,t,o);break;case 4:o=new s.DracoUInt16Array,a=new Uint16Array(n),r.GetAttributeUInt16ForAllPoints(e,t,o);break;case 5:case 7:o=new s.DracoInt32Array,a=new Int32Array(n),r.GetAttributeInt32ForAllPoints(e,t,o);break;case 6:case 8:o=new s.DracoUInt32Array,a=new Uint32Array(n),r.GetAttributeUInt32ForAllPoints(e,t,o);break;case 9:case 10:o=new s.DracoFloat32Array,a=new Float32Array(n),r.GetAttributeFloatForAllPoints(e,t,o)}for(var i=0;i<n;++i)a[i]=o.GetValue(i);return s.destroy(o),a}(t,n,a,A);var b=e.ComponentDatatype.fromTypedArray(f);return{array:f,data:{componentsPerAttribute:u,componentDatatype:b,byteOffset:a.byte_offset(),byteStride:e.ComponentDatatype.getSizeInBytes(b)*u,normalized:a.normalized(),quantization:o}}}function y(e){return r.defined(e.primitive)?function(e){var r=new s.Decoder,t=["POSITION","NORMAL","COLOR","TEX_COORD"];if(e.dequantizeInShader)for(var a=0;a<t.length;++a)r.SkipAttributeTransform(s[t[a]]);var o=e.bufferView,i=new s.DecoderBuffer;if(i.Init(e.array,o.byteLength),r.GetEncodedGeometryType(i)!==s.TRIANGULAR_MESH)throw new n.RuntimeError("Unsupported draco mesh geometry type.");var u=new s.Mesh,y=r.DecodeBufferToMesh(i,u);if(!y.ok()||0===u.ptr)throw new n.RuntimeError("Error decoding draco mesh geometry: "+y.error_msg());s.destroy(i);var f={},A=e.compressedAttributes;for(var b in A)if(A.hasOwnProperty(b)){var m=A[b],w=r.GetAttributeByUniqueId(u,m);f[b]=c(u,r,w)}var l={indexArray:d(u,r),attributeData:f};return s.destroy(u),s.destroy(r),l}(e):function(e){var r=new s.Decoder;e.dequantizeInShader&&(r.SkipAttributeTransform(s.POSITION),r.SkipAttributeTransform(s.NORMAL));var t=new s.DecoderBuffer;if(t.Init(e.buffer,e.buffer.length),r.GetEncodedGeometryType(t)!==s.POINT_CLOUD)throw new n.RuntimeError("Draco geometry type must be POINT_CLOUD.");var a=new s.PointCloud,o=r.DecodeBufferToPointCloud(t,a);if(!o.ok()||0===a.ptr)throw new n.RuntimeError("Error decoding draco point cloud: "+o.error_msg());s.destroy(t);var i={},u=e.properties;for(var d in u)if(u.hasOwnProperty(d)){var y=u[d],f=r.GetAttributeByUniqueId(a,y);i[d]=c(a,r,f)}return s.destroy(a),s.destroy(r),i}(e)}function f(e){s=e,self.onmessage=a(y),self.postMessage(!0)}return function(e){var t=e.data.webAssemblyConfig;if(r.defined(t))return require([t.modulePath],(function(e){r.defined(t.wasmBinaryFile)?(r.defined(e)||(e=self.DracoDecoderModule),e(t).then((function(e){f(e)}))):f(e())}))}}));
