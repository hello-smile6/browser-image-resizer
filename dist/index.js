!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("BrowserImageResizer",[],t):"object"==typeof exports?exports.BrowserImageResizer=t():e.BrowserImageResizer=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(module,__webpack_exports__,__webpack_require__){"use strict";function get(){if("undefined"!=typeof DOMParser)return DOMParser;try{return eval("require")("xmldom").DOMParser}catch(e){return}}__webpack_exports__.a={get:get}},function(e,t,n){"use strict";n.r(t);class r{constructor(e){if(function(e){return"object"!=typeof e||void 0===e.length||void 0===e.readUInt8||void 0===e.readUInt16LE||void 0===e.readUInt16BE||void 0===e.readUInt32LE||void 0===e.readUInt32BE||void 0===e.readInt32LE||void 0===e.readInt32BE}(e))throw new Error("DataView: Passed buffer type is unsupported.");this.buffer=e,this.byteLength=this.buffer.length}getUint8(e){return this.buffer.readUInt8(e)}getUint16(e,t){return t?this.buffer.readUInt16LE(e):this.buffer.readUInt16BE(e)}getUint32(e,t){return t?this.buffer.readUInt32LE(e):this.buffer.readUInt32BE(e)}getInt32(e,t){return t?this.buffer.readInt32LE(e):this.buffer.readInt32BE(e)}}function i(e,t,n){const r=[];for(let i=0;i<n&&t+i<e.byteLength;i++)r.push(e.getUint8(t+i,!1));return(i=r,i.map(e=>String.fromCharCode(e))).join("");var i}const o=2,a=65496,s=2,c=4,u=2,d=10,l=18,f=33,p=65472,g=65474,m=65476,h=65499,b=65501,v=65498,S=65504,y=65505,w=65517,I=65519,A=65534,C="Exif",D="http://ns.adobe.com/xap/1.0/",P="Photoshop 3.0";var U={check:function(e){if(e.byteLength<o||e.getUint16(0,!1)!==a)throw new Error("Invalid image format")},parseAppMarkers:function(e){let t,n,r,i,o,a,p,g=s;for(;g+c+5<=e.byteLength;){if(F(e,g))n=g+u;else if(O(e,g))r=g+u;else if(T(e,g))t=e.getUint16(g+u,!1),i=g+d;else if(M(e,g))t=e.getUint16(g+u,!1),a=g+f,p=t-(f-u);else if(R(e,g))t=e.getUint16(g+u,!1),o=g+l;else{if(!E(e,g))break;t=e.getUint16(g+u,!1)}g+=u+t}return{hasAppMarkers:g>s,fileDataOffset:n||r,tiffHeaderOffset:i,iptcDataOffset:o,xmpDataOffset:a,xmpFieldLength:p}}};function F(e,t){return e.getUint16(t,!1)===p}function O(e,t){return e.getUint16(t,!1)===g}function T(e,t){const n=C.length;return e.getUint16(t,!1)===y&&i(e,t+c,n)===C&&0===e.getUint8(t+c+n,!1)}function M(e,t){const n=D.length;return e.getUint16(t,!1)===y&&i(e,t+c,n)===D&&0===e.getUint8(t+c+n,!1)}function R(e,t){const n=P.length;return e.getUint16(t,!1)===w&&i(e,t+c,n)===P&&0===e.getUint8(t+c+n,!1)}function E(e,t){const n=e.getUint16(t,!1);return n>=S&&n<=I||n===A||n===p||n===g||n===m||n===h||n===b||n===v}const x=18761,N=19789;var k={BIG_ENDIAN:N,LITTLE_ENDIAN:x,getByteOrder:function(e,t){if(e.getUint16(t)===x)return x;if(e.getUint16(t)===N)return N;throw new Error("Illegal byte order value. Faulty image.")}};const L={1:1,2:1,3:2,4:4,5:8,7:1,9:4,10:8},j={BYTE:1,ASCII:2,SHORT:3,LONG:4,RATIONAL:5,UNDEFINED:7,SLONG:9,SRATIONAL:10};var G={getAsciiValue:function(e){return e.map(e=>String.fromCharCode(e))},getByteAt:B,getAsciiAt:function(e,t){return e.getUint8(t)},getShortAt:function(e,t,n){return e.getUint16(t,n===k.LITTLE_ENDIAN)},getLongAt:z,getRationalAt:function(e,t,n){return z(e,t,n)/z(e,t+4,n)},getUndefinedAt:function(e,t){return B(e,t)},getSlongAt:W,getSrationalAt:function(e,t,n){return W(e,t,n)/W(e,t+4,n)},typeSizes:L,tagTypes:j,getTypeSize:function(e){if(void 0===j[e])throw new Error("No such type found.");return L[j[e]]}};function B(e,t){return e.getUint8(t)}function z(e,t,n){return e.getUint32(t,n===k.LITTLE_ENDIAN)}function W(e,t,n){return e.getInt32(t,n===k.LITTLE_ENDIAN)}function _(e){return e.map(e=>String.fromCharCode(e)).join("")}function V(e){if(e.length>=8){const t=_(e.slice(0,8));if("ASCII\0\0\0"===t)return _(e.slice(8));if("JIS\0\0\0\0\0"===t)return"[JIS encoded text]";if("UNICODE\0"===t)return"[Unicode encoded text]";if("\0\0\0\0\0\0\0\0"===t)return"[Undefined encoding]"}return"Undefined"}var H={"0th":{256:"ImageWidth",257:"ImageLength",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",270:"ImageDescription",271:"Make",272:"Model",273:"StripOffsets",274:{name:"Orientation",description:e=>1===e?"top-left":2===e?"top-right":3===e?"bottom-right":4===e?"bottom-left":5===e?"left-top":6===e?"right-top":7===e?"right-bottom":8===e?"left-bottom":"Undefined"},277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:{name:"ResolutionUnit",description:e=>2===e?"inches":3===e?"centimeters":"Unknown"},301:"TransferFunction",305:"Software",306:"DateTime",315:"Artist",318:"WhitePoint",319:"PrimaryChromaticities",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:{name:"YCbCrPositioning",description:e=>1===e?"centered":2===e?"co-sited":"undefined "+e},532:"ReferenceBlackWhite",33432:{name:"Copyright",description:e=>e.join("; ")},34665:"Exif IFD Pointer",34853:"GPS Info IFD Pointer"},exif:{33434:"ExposureTime",33437:"FNumber",34850:{name:"ExposureProgram",description:e=>0===e?"Undefined":1===e?"Manual":2===e?"Normal program":3===e?"Aperture priority":4===e?"Shutter priority":5===e?"Creative program":6===e?"Action program":7===e?"Portrait mode":8===e?"Landscape mode":"Unknown"},34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:{name:"OECF",description:()=>"[Raw OECF table data]"},36864:{name:"ExifVersion",description:e=>_(e)},36867:"DateTimeOriginal",36868:"DateTimeDigitized",37121:{name:"ComponentsConfiguration",description:e=>e.map(e=>49===e?"Y":50===e?"Cb":51===e?"Cr":52===e?"R":53===e?"G":54===e?"B":void 0).join("")},37122:"CompressedBitsPerPixel",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBiasValue",37381:"MaxApertureValue",37382:"SubjectDistance",37383:{name:"MeteringMode",description:e=>1===e?"Average":2===e?"CenterWeightedAverage":3===e?"Spot":4===e?"MultiSpot":5===e?"Pattern":6===e?"Partial":255===e?"Other":"Unknown"},37384:{name:"LightSource",description:e=>1===e?"Daylight":2===e?"Fluorescent":3===e?"Tungsten (incandescent light)":4===e?"Flash":9===e?"Fine weather":10===e?"Cloudy weather":11===e?"Shade":12===e?"Daylight fluorescent (D 5700 – 7100K)":13===e?"Day white fluorescent (N 4600 – 5400K)":14===e?"Cool white fluorescent (W 3900 – 4500K)":15===e?"White fluorescent (WW 3200 – 3700K)":17===e?"Standard light A":18===e?"Standard light B":19===e?"Standard light C":20===e?"D55":21===e?"D65":22===e?"D75":23===e?"D50":24===e?"ISO studio tungsten":255===e?"Other light source":"Unknown"},37385:{name:"Flash",description:e=>0===e?"Flash did not fire":1===e?"Flash fired":5===e?"Strobe return light not detected":7===e?"Strobe return light detected":9===e?"Flash fired, compulsory flash mode":13===e?"Flash fired, compulsory flash mode, return light not detected":15===e?"Flash fired, compulsory flash mode, return light detected":16===e?"Flash did not fire, compulsory flash mode":24===e?"Flash did not fire, auto mode":25===e?"Flash fired, auto mode":29===e?"Flash fired, auto mode, return light not detected":31===e?"Flash fired, auto mode, return light detected":32===e?"No flash function":65===e?"Flash fired, red-eye reduction mode":69===e?"Flash fired, red-eye reduction mode, return light not detected":71===e?"Flash fired, red-eye reduction mode, return light detected":73===e?"Flash fired, compulsory flash mode, red-eye reduction mode":77===e?"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected":79===e?"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected":89===e?"Flash fired, auto mode, red-eye reduction mode":93===e?"Flash fired, auto mode, return light not detected, red-eye reduction mode":95===e?"Flash fired, auto mode, return light detected, red-eye reduction mode":"Unknown"},37386:"FocalLength",37396:{name:"SubjectArea",description:e=>2===e.length?`Location; X: ${e[0]}, Y: ${e[1]}`:3===e.length?`Circle; X: ${e[0]}, Y: ${e[1]}, diameter: ${e[2]}`:4===e.length?`Rectangle; X: ${e[0]}, Y: ${e[1]}, width: ${e[2]}, height: ${e[3]}`:"Unknown"},37500:{name:"MakerNote",description:()=>"[Raw maker note data]"},37510:{name:"UserComment",description:V},37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",40960:{name:"FlashpixVersion",description:e=>e.map(e=>String.fromCharCode(e)).join("")},40961:{name:"ColorSpace",description:e=>1===e?"sRGB":65535===e?"Uncalibrated":"Unknown"},40962:"PixelXDimension",40963:"PixelYDimension",40964:"RelatedSoundFile",40965:"Interoperability IFD Pointer",41483:"FlashEnergy",41484:{name:"SpatialFrequencyResponse",description:()=>"[Raw SFR table data]"},41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:{name:"FocalPlaneResolutionUnit",description:e=>2===e?"inches":3===e?"centimeters":"Unknown"},41492:{name:"SubjectLocation",description:([e,t])=>`X: ${e}, Y: ${t}`},41493:"ExposureIndex",41495:{name:"SensingMethod",description:e=>1===e?"Undefined":2===e?"One-chip color area sensor":3===e?"Two-chip color area sensor":4===e?"Three-chip color area sensor":5===e?"Color sequential area sensor":7===e?"Trilinear sensor":8===e?"Color sequential linear sensor":"Unknown"},41728:{name:"FileSource",description:e=>3===e?"DSC":"Unknown"},41729:{name:"SceneType",description:e=>1===e?"A directly photographed image":"Unknown"},41730:{name:"CFAPattern",description:()=>"[Raw CFA pattern table data]"},41985:{name:"CustomRendered",description:e=>0===e?"Normal process":1===e?"Custom process":"Unknown"},41986:{name:"ExposureMode",description:e=>0===e?"Auto exposure":1===e?"Manual exposure":2===e?"Auto bracket":"Unknown"},41987:{name:"WhiteBalance",description:e=>0===e?"Auto white balance":1===e?"Manual white balance":"Unknown"},41988:{name:"DigitalZoomRatio",description:e=>0===e?"Digital zoom was not used":e},41989:{name:"FocalLengthIn35mmFilm",description:e=>0===e?"Unknown":e},41990:{name:"SceneCaptureType",description:e=>0===e?"Standard":1===e?"Landscape":2===e?"Portrait":3===e?"Night scene":"Unknown"},41991:{name:"GainControl",description:e=>0===e?"None":1===e?"Low gain up":2===e?"High gain up":3===e?"Low gain down":4===e?"High gain down":"Unknown"},41992:{name:"Contrast",description:e=>0===e?"Normal":1===e?"Soft":2===e?"Hard":"Unknown"},41993:{name:"Saturation",description:e=>0===e?"Normal":1===e?"Low saturation":2===e?"High saturation":"Unknown"},41994:{name:"Sharpness",description:e=>0===e?"Normal":1===e?"Soft":2===e?"Hard":"Unknown"},41995:{name:"DeviceSettingDescription",description:()=>"[Raw device settings table data]"},41996:{name:"SubjectDistanceRange",description:e=>1===e?"Macro":2===e?"Close view":3===e?"Distant view":"Unknown"},42016:"ImageUniqueID"},gps:{0:{name:"GPSVersionID",description:e=>2===e[0]&&2===e[1]&&0===e[2]&&0===e[3]?"Version 2.2":"Unknown"},1:{name:"GPSLatitudeRef",description:e=>{const t=e.join("");return"N"===t?"North latitude":"S"===t?"South latitude":"Unknown"}},2:{name:"GPSLatitude",description:e=>e[0]+e[1]/60+e[2]/3600},3:{name:"GPSLongitudeRef",description:e=>{const t=e.join("");return"E"===t?"East longitude":"W"===t?"West longitude":"Unknown"}},4:{name:"GPSLongitude",description:e=>e[0]+e[1]/60+e[2]/3600},5:{name:"GPSAltitudeRef",description:e=>0===e?"Sea level":1===e?"Sea level reference (negative value)":"Unknown"},6:{name:"GPSAltitude",description:e=>e+" m"},7:{name:"GPSTimeStamp",description:e=>e.map(e=>1===`${e}`.length?`0${e}`:e).join(":")},8:"GPSSatellites",9:{name:"GPSStatus",description:e=>{const t=e.join("");return"A"===t?"Measurement in progress":"V"===t?"Measurement Interoperability":"Unknown"}},10:{name:"GPSMeasureMode",description:e=>{const t=e.join("");return"2"===t?"2-dimensional measurement":"3"===t?"3-dimensional measurement":"Unknown"}},11:"GPSDOP",12:{name:"GPSSpeedRef",description:e=>{const t=e.join("");return"K"===t?"Kilometers per hour":"M"===t?"Miles per hour":"N"===t?"Knots":"Unknown"}},13:"GPSSpeed",14:{name:"GPSTrackRef",description:e=>{const t=e.join("");return"T"===t?"True direction":"M"===t?"Magnetic direction":"Unknown"}},15:"GPSTrack",16:{name:"GPSImgDirectionRef",description:e=>{const t=e.join("");return"T"===t?"True direction":"M"===t?"Magnetic direction":"Unknown"}},17:"GPSImgDirection",18:"GPSMapDatum",19:{name:"GPSDestLatitudeRef",description:e=>{const t=e.join("");return"N"===t?"North latitude":"S"===t?"South latitude":"Unknown"}},20:{name:"GPSDestLatitude",description:e=>e[0]+e[1]/60+e[2]/3600},21:{name:"GPSDestLongitudeRef",description:e=>{const t=e.join("");return"E"===t?"East longitude":"W"===t?"West longitude":"Unknown"}},22:{name:"GPSDestLongitude",description:e=>e[0]+e[1]/60+e[2]/3600},23:{name:"GPSDestBearingRef",description:e=>{const t=e.join("");return"T"===t?"True direction":"M"===t?"Magnetic direction":"Unknown"}},24:"GPSDestBearing",25:{name:"GPSDestDistanceRef",description:e=>{const t=e.join("");return"K"===t?"Kilometers":"M"===t?"Miles":"N"===t?"Knots":"Unknown"}},26:"GPSDestDistance",27:{name:"GPSProcessingMethod",description:V},28:{name:"GPSAreaInformation",description:V},29:"GPSDateStamp",30:{name:"GPSDifferential",description:e=>0===e?"Measurement without differential correction":1===e?"Differential correction applied":"Unknown"}},interoperability:{1:"InteroperabilityIndex"}};const $="Exif IFD Pointer",K="GPS Info IFD Pointer",q="Interoperability IFD Pointer",X={1:G.getByteAt,2:G.getAsciiAt,3:G.getShortAt,4:G.getLongAt,5:G.getRationalAt,7:G.getUndefinedAt,9:G.getSlongAt,10:G.getSrationalAt};var Y={read:function(e,t){const n=k.getByteOrder(e,t);let r=function(e,t,n){return J(e,"0th",t,function(e,t,n){return t+G.getLongAt(e,t+4,n)}(e,t,n),n)}(e,t,n);return r=function(e,t,n,r){if(void 0!==e[q])return Object.assign(e,J(t,"interoperability",n,n+e[q].value,r));return e}(r=function(e,t,n,r){if(void 0!==e[K])return Object.assign(e,J(t,"gps",n,n+e[K].value,r));return e}(r=function(e,t,n,r){if(void 0!==e[$])return Object.assign(e,J(t,"exif",n,n+e[$].value,r));return e}(r,e,t,n),e,t,n),e,t,n)}};function J(e,t,n,r,i){const o=G.getTypeSize("SHORT"),a={},s=G.getShortAt(e,r,i);r+=o;for(let o=0;o<s;o++){const o=Z(e,t,n,r,i);void 0!==o&&(a[o.name]={id:o.id,value:o.value,description:o.description}),r+=12}return a}function Z(e,t,n,r,i){const o=G.getTypeSize("SHORT"),a=o+G.getTypeSize("SHORT"),s=a+G.getTypeSize("LONG"),c=G.getShortAt(e,r,i),u=G.getShortAt(e,r+o,i),d=G.getLongAt(e,r+a,i);let l;if(void 0!==G.typeSizes[u]){if(function(e,t){return G.typeSizes[e]*t<=G.getTypeSize("LONG")}(u,d))l=Q(e,r+s,u,d,i);else{const t=G.getLongAt(e,r+s,i);l=function(e,t,n,r,i){return t+n+G.typeSizes[r]*i<=e.byteLength}(e,n,t,u,d)?Q(e,n+t,u,d,i):"<faulty value>"}if(u===G.tagTypes.ASCII&&(l=function(e){try{return e.map(e=>decodeURIComponent(escape(e)))}catch(t){return e}}(l=function(e){const t=[];let n=0;for(const r of e)"\0"!==r?(void 0===t[n]&&(t[n]=""),t[n]+=r):n++;return t}(l))),void 0!==H[t][c]){let e,n;return void 0!==H[t][c].name&&void 0!==H[t][c].description?(e=H[t][c].name,n=H[t][c].description(l)):(e=H[t][c],n=l instanceof Array?l.join(", "):l),{id:c,name:e,value:l,description:n}}return{id:c,name:`undefined-${c}`,value:l,description:l}}}function Q(e,t,n,r,i){let o=[];for(let a=0;a<r;a++)o.push(X[n](e,t,i)),t+=G.typeSizes[n];return n===G.tagTypes.ASCII?o=G.getAsciiValue(o):1===o.length&&(o=o[0]),o}var ee={read:function(e,t){const n=function(e,t){return G.getShortAt(e,t)}(e,t),r=function(e,t,n){if(8>n)return;const r=G.getByteAt(e,t+7);return{value:r,description:""+r}}(e,t,n);return{"Bits Per Sample":te(e,t,n),"Image Height":ne(e,t,n),"Image Width":re(e,t,n),"Color Components":r,Subsampling:r&&ie(e,t,r.value,n)}}};function te(e,t,n){if(3>n)return;const r=G.getByteAt(e,t+2);return{value:r,description:""+r}}function ne(e,t,n){if(5>n)return;const r=G.getShortAt(e,t+3);return{value:r,description:`${r}px`}}function re(e,t,n){if(7>n)return;const r=G.getShortAt(e,t+5);return{value:r,description:`${r}px`}}function ie(e,t,n,r){if(8+3*n>r)return;const i=[];for(let r=0;r<n;r++){const n=t+8+3*r;i.push([G.getByteAt(e,n),G.getByteAt(e,n+1),G.getByteAt(e,n+2)])}return{value:i,description:i.length>1?oe(i)+ae(i):""}}function oe(e){const t={1:"Y",2:"Cb",3:"Cr",4:"I",5:"Q"};return e.map(e=>t[e[0]]).join("")}function ae(e){const t={17:"4:4:4 (1 1)",18:"4:4:0 (1 2)",20:"4:4:1 (1 4)",33:"4:2:2 (2 1)",34:"4:2:0 (2 2)",36:"4:2:1 (2 4)",65:"4:1:1 (4 1)",66:"4:1:0 (4 2)"};return 0===e.length||void 0===e[0][1]||void 0===t[e[0][1]]?"":t[e[0][1]]}var se={iptc:{256:{name:"Model Version",description:e=>((e[0]<<8)+e[1]).toString()},261:{name:"Destination",repeatable:!0},276:{name:"File Format",description:e=>((e[0]<<8)+e[1]).toString()},278:{name:"File Format Version",description:e=>((e[0]<<8)+e[1]).toString()},286:"Service Identifier",296:"Envelope Number",306:"Product ID",316:"Envelope Priority",326:{name:"Date Sent",description:ce},336:{name:"Time Sent",description:ue},346:{name:"Coded Character Set",description:de,encoding_name:de},356:"UNO",376:{name:"ARM Identifier",description:e=>((e[0]<<8)+e[1]).toString()},378:{name:"ARM Version",description:e=>((e[0]<<8)+e[1]).toString()},512:{name:"Record Version",description:e=>((e[0]<<8)+e[1]).toString()},515:"Object Type Reference",516:"Object Attribute Reference",517:"Object Name",519:"Edit Status",520:{name:"Editorial Update",description:e=>"01"===_(e)?"Additional Language":"Unknown"},522:"Urgency",524:{name:"Subject Reference",repeatable:!0,description:e=>{const t=_(e).split(":");return t[2]+(t[3]?"/"+t[3]:"")+(t[4]?"/"+t[4]:"")}},527:"Category",532:{name:"Supplemental Category",repeatable:!0},534:"Fixture Identifier",537:{name:"Keywords",repeatable:!0},538:{name:"Content Location Code",repeatable:!0},539:{name:"Content Location Name",repeatable:!0},542:"Release Date",547:"Release Time",549:"Expiration Date",550:"Expiration Time",552:"Special Instructions",554:{name:"Action Advised",description:e=>{const t=_(e);return"01"===t?"Object Kill":"02"===t?"Object Replace":"03"===t?"Object Append":"04"===t?"Object Reference":"Unknown"}},557:{name:"Reference Service",repeatable:!0},559:{name:"Reference Date",repeatable:!0},562:{name:"Reference Number",repeatable:!0},567:{name:"Date Created",description:ce},572:{name:"Time Created",description:ue},574:{name:"Digital Creation Date",description:ce},575:{name:"Digital Creation Time",description:ue},577:"Originating Program",582:"Program Version",587:{name:"Object Cycle",description:e=>{const t=_(e);return"a"===t?"morning":"p"===t?"evening":"b"===t?"both":"Unknown"}},592:{name:"By-line",repeatable:!0},597:{name:"By-line Title",repeatable:!0},602:"City",604:"Sub-location",607:"Province/State",612:"Country/Primary Location Code",613:"Country/Primary Location Name",615:"Original Transmission Reference",617:"Headline",622:"Credit",627:"Source",628:"Copyright Notice",630:{name:"Contact",repeatable:!0},632:"Caption/Abstract",634:{name:"Writer/Editor",repeatable:!0},637:{name:"Rasterized Caption",description:e=>e},642:"Image Type",643:{name:"Image Orientation",description:e=>{const t=_(e);return"P"===t?"Portrait":"L"===t?"Landscape":"S"===t?"Square":"Unknown"}},647:"Language Identifier",662:{name:"Audio Type",description:e=>{const t=_(e),n=t.charAt(0),r=t.charAt(1);let i="";return"1"===n?i+="Mono":"2"===n&&(i+="Stereo"),"A"===r?i+=", actuality":"C"===r?i+=", question and answer session":"M"===r?i+=", music, transmitted by itself":"Q"===r?i+=", response to a question":"R"===r?i+=", raw sound":"S"===r?i+=", scener":"V"===r?i+=", voicer":"W"===r&&(i+=", wrap"),""!==i?i:t}},663:{name:"Audio Sampling Rate",description:e=>parseInt(_(e),10)+" Hz"},664:{name:"Audio Sampling Resolution",description:e=>{const t=parseInt(_(e),10);return t+(1===t?" bit":" bits")}},665:{name:"Audio Duration",description:e=>{const t=_(e);return t.length>=6?t.substr(0,2)+":"+t.substr(2,2)+":"+t.substr(4,2):t}},666:"Audio Outcue",698:"Short Document ID",699:"Unique Document ID",700:"Owner ID",712:{name:e=>2===e.length?"ObjectData Preview File Format":"Record 2 destination",description:e=>{if(2===e.length){const t=(e[0]<<8)+e[1];return 0===t?"No ObjectData":1===t?"IPTC-NAA Digital Newsphoto Parameter Record":2===t?"IPTC7901 Recommended Message Format":3===t?"Tagged Image File Format (Adobe/Aldus Image data)":4===t?"Illustrator (Adobe Graphics data)":5===t?"AppleSingle (Apple Computer Inc)":6===t?"NAA 89-3 (ANPA 1312)":7===t?"MacBinary II":8===t?"IPTC Unstructured Character Oriented File Format (UCOFF)":9===t?"United Press International ANPA 1312 variant":10===t?"United Press International Down-Load Message":11===t?"JPEG File Interchange (JFIF)":12===t?"Photo-CD Image-Pac (Eastman Kodak)":13===t?"Microsoft Bit Mapped Graphics File [*.BMP]":14===t?"Digital Audio File [*.WAV] (Microsoft & Creative Labs)":15===t?"Audio plus Moving Video [*.AVI] (Microsoft)":16===t?"PC DOS/Windows Executable Files [*.COM][*.EXE]":17===t?"Compressed Binary File [*.ZIP] (PKWare Inc)":18===t?"Audio Interchange File Format AIFF (Apple Computer Inc)":19===t?"RIFF Wave (Microsoft Corporation)":20===t?"Freehand (Macromedia/Aldus)":21===t?'Hypertext Markup Language "HTML" (The Internet Society)':22===t?"MPEG 2 Audio Layer 2 (Musicom), ISO/IEC":23===t?"MPEG 2 Audio Layer 3, ISO/IEC":24===t?"Portable Document File (*.PDF) Adobe":25===t?"News Industry Text Format (NITF)":26===t?"Tape Archive (*.TAR)":27===t?"Tidningarnas Telegrambyrå NITF version (TTNITF DTD)":28===t?"Ritzaus Bureau NITF version (RBNITF DTD)":29===t?"Corel Draw [*.CDR]":`Unknown format ${t}`}return _(e)}},713:{name:"ObjectData Preview File Format Version",description:(e,t)=>{const n={"00":{"00":"1"},"01":{"01":"1","02":"2","03":"3","04":"4"},"02":{"04":"4"},"03":{"01":"5.0","02":"6.0"},"04":{"01":"1.40"},"05":{"01":"2"},"06":{"01":"1"},11:{"01":"1.02"},20:{"01":"3.1","02":"4.0","03":"5.0","04":"5.5"},21:{"02":"2.0"}},r=_(e);if(t["ObjectData Preview File Format"]){const e=_(t["ObjectData Preview File Format"].value);if(n[e]&&n[e][r])return n[e][r]}return r}},714:"ObjectData Preview Data",1802:{name:"Size Mode",description:e=>e[0].toString()},1812:{name:"Max Subfile Size",description:e=>{let t=0;for(let n=0;n<e.length;n++)t=(t<<8)+e[n];return t.toString()}},1882:{name:"ObjectData Size Announced",description:e=>{let t=0;for(let n=0;n<e.length;n++)t=(t<<8)+e[n];return t.toString()}},1887:{name:"Maximum ObjectData Size",description:e=>{let t=0;for(let n=0;n<e.length;n++)t=(t<<8)+e[n];return t.toString()}}}};function ce(e){const t=_(e);return t.length>=8?t.substr(0,4)+"-"+t.substr(4,2)+"-"+t.substr(6,2):t}function ue(e){const t=_(e);let n=t;return t.length>=6&&(n=t.substr(0,2)+":"+t.substr(2,2)+":"+t.substr(4,2),11===t.length&&(n+=t.substr(6,1)+t.substr(7,2)+":"+t.substr(9,2))),n}function de(e){const t=_(e);return"%G"===t?"UTF-8":"%5"===t?"Windows-1252":"%/G"===t?"UTF-8 Level 1":"%/H"===t?"UTF-8 Level 2":"%/I"===t?"UTF-8 Level 3":"/A"===t?"ISO-8859-1":"/B"===t?"ISO-8859-2":"/C"===t?"ISO-8859-3":"/D"===t?"ISO-8859-4":"/@"===t?"ISO-8859-5":"/G"===t?"ISO-8859-6":"/F"===t?"ISO-8859-7":"/H"===t?"ISO-8859-8":"Unknown"}var le={get:function(){if("undefined"!=typeof TextDecoder)return TextDecoder;return}};var fe={decode:function(e,t){const n=le.get();if(void 0!==n&&void 0!==e)try{return new n(e).decode(Uint8Array.from(t))}catch(e){}return function(e){try{return decodeURIComponent(escape(e))}catch(t){return e}}(t.map(e=>String.fromCharCode(e)).join(""))},TAG_HEADER_SIZE:5};const pe=943868237,ge=4,me=ge+8,he=1028,be=5;var ve={read:function(e,t){try{const{naaBlock:n,dataOffset:r}=function(e,t){for(;t+me<=e.byteLength;){const n=Se(e,t);if(ye(n))return{naaBlock:n,dataOffset:t};t+=me+n.size+we(n)}throw new Error("No IPTC NAA resource block.")}(e,t);return function(e,t,n){const r={};let i=void 0;const o=(n+=me)+t.size;for(;n<o&&n<e.byteLength;){const{tag:t,tagSize:o}=Ie(e,n,r,i);if(null===t)break;"encoding"in t&&(i=t.encoding),void 0===r[t.name]||void 0===t.repeatable?r[t.name]={id:t.id,value:t.value,description:t.description}:(r[t.name]instanceof Array||(r[t.name]=[{id:r[t.name].id,value:r[t.name].value,description:r[t.name].description}]),r[t.name].push({id:t.id,value:t.value,description:t.description})),n+=be+o}return r}(e,n,r)}catch(e){return{}}}};function Se(e,t){if(e.getUint32(t,!1)!==pe)throw new Error("Not an IPTC resource block.");return{type:e.getUint16(t+ge,!1),size:e.getUint16(t+10,!1)}}function ye(e){return e.type===he}function we(e){return e.size%2!=0?1:0}function Ie(e,t,n,r){if(function(e,t){return 28!==e.getUint8(t)}(e,t))return{tag:null,tagSize:0};const i=e.getUint16(t+1,!1),o=e.getUint16(t+3,!1),a=function(e,t,n){const r=[];for(let i=0;i<n;i++)r.push(e.getUint8(t+i));return r}(e,t+be,o),s={id:i,name:Ae(se.iptc[i],i,a),value:a,description:Ce(se.iptc[i],a,n,r)};return function(e){return se.iptc[e]&&se.iptc[e].repeatable}(i)&&(s.repeatable=!0),function(e){return se.iptc[e]&&void 0!==se.iptc[e].encoding_name}(i)&&(s.encoding=se.iptc[i].encoding_name(a)),{tag:s,tagSize:o}}function Ae(e,t,n){return e?function(e){return"string"==typeof e}(e)?e:function(e){return"function"==typeof e.name}(e)?e.name(n):e.name:`undefined-${t}`}function Ce(e,t,n,r){return function(e){return e&&void 0!==e.description}(e)?e.description(t,n):function(e,t){return e&&t instanceof Array}(e,t)?fe.decode(r,t):t}var De={"tiff:Orientation":e=>"1"===e?"Horizontal (normal)":"2"===e?"Mirror horizontal":"3"===e?"Rotate 180":"4"===e?"Mirror vertical":"5"===e?"Mirror horizontal and rotate 270 CW":"6"===e?"Rotate 90 CW":"7"===e?"Mirror horizontal and rotate 90 CW":"8"===e?"Rotate 270 CW":e,"exif:GPSLatitude":Pe,"exif:GPSLongitude":Pe};function Pe(e){const[t,n]=e.split(",");if(void 0!==t&&void 0!==n){const e=parseFloat(t),r=parseFloat(n),i=n.charAt(n.length-1);if(!Number.isNaN(e)&&!Number.isNaN(r))return""+(e+r/60)+i}return e}var Ue=n(0),Fe={read:function(e,t,n){try{const r=function(e,t,n){const r=Ue.a.get();if(!r)throw console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags."),new Error;const o=new r,a=i(e,t,n),s=o.parseFromString(a,"application/xml");if("parsererror"===s.documentElement.nodeName)throw new Error(s.documentElement.textContent);return s}(e,t,n),o=function e(t){for(let n=0;n<t.childNodes.length;n++){if("x:xmpmeta"===t.childNodes[n].tagName)return e(t.childNodes[n]);if("rdf:RDF"===t.childNodes[n].tagName)return t.childNodes[n]}throw new Error}(r);return Me(Oe(o,!0))}catch(e){return{}}}};function Oe(e,t=!1){const n=function(e){const t=[];for(let n=0;n<e.childNodes.length;n++)t.push(e.childNodes[n]);return t}(e);return 1===(r=n).length&&"#text"===r[0].nodeName?t?{}:function(e){return e.nodeValue}(n[0]):function(e){const t={};return e.forEach(e=>{if(function(e){return e.nodeName&&"#text"!==e.nodeName}(e)){const n=function(e){return{attributes:Te(e),value:Oe(e)}}(e);void 0!==t[e.nodeName]?(Array.isArray(t[e.nodeName])||(t[e.nodeName]=[t[e.nodeName]]),t[e.nodeName].push(n)):t[e.nodeName]=n}}),t}(n);var r}function Te(e){const t={};for(let n=0;n<e.attributes.length;n++)t[e.attributes[n].nodeName]=decodeURIComponent(escape(e.attributes[n].value));return t}function Me(e){const t={};if("string"==typeof e)return e;for(const n in e){let r=e[n];Array.isArray(r)||(r=[r]),r.forEach(e=>{Object.assign(t,Re(e.attributes)),"object"==typeof e.value&&Object.assign(t,je(e.value))})}return t}function Re(e){const t={};for(const n in e)Ee(n)&&(t[Ne(n)]={value:e[n],attributes:{},description:ke(e[n],n)});return t}function Ee(e){return"rdf:parseType"!==e&&!xe(e)}function xe(e){return"xmlns"===e.split(":")[0]}function Ne(e){return e.split(":")[1]}function ke(e,t){if(Array.isArray(e))return function(e){return e.map(e=>void 0!==e.value?ke(e.value):ke(e)).join(", ")}(e);if("object"==typeof e)return function(e){const t=[];for(const n in e)t.push(`${Le(n)}: ${e[n].value}`);return t.join("; ")}(e);try{return t&&"function"==typeof De[t]?De[t](e):decodeURIComponent(escape(e))}catch(t){return e}}function Le(e){return"CiAdrCity"===e?"CreatorCity":"CiAdrCtry"===e?"CreatorCountry":"CiAdrExtadr"===e?"CreatorAddress":"CiAdrPcode"===e?"CreatorPostalCode":"CiAdrRegion"===e?"CreatorRegion":"CiEmailWork"===e?"CreatorWorkEmail":"CiTelWork"===e?"CreatorWorkPhone":"CiUrlWork"===e?"CreatorWorkUrl":e}function je(e){const t={};for(const n in e)xe(n)||(t[Ne(n)]=Ge(e[n],n));return t}function Ge(e,t){return Be(e)?ze(e,t):function(e){return"Resource"===e.attributes["rdf:parseType"]||void 0!==e.value["rdf:Description"]&&void 0===e.value["rdf:Description"].value["rdf:value"]}(e)?function(e,t){const n={value:{},attributes:{}};void 0!==e.value["rdf:Description"]&&(Object.assign(n.value,Re(e.value["rdf:Description"].attributes)),Object.assign(n.attributes,We(e)),e=e.value["rdf:Description"]);return Object.assign(n.value,je(e.value)),n.description=ke(n.value,t),n}(e,t):function(e){return 0===Object.keys(e.value).length&&void 0===e.attributes["rdf:resource"]}(e)?function(e,t){const n=Re(e.attributes);return{value:n,attributes:{},description:ke(n,t)}}(e,t):function(e){return void 0!==_e(e.value)}(e)?function(e,t){let n=_e(e.value).value["rdf:li"];const r=We(e),i=[];void 0===n?n=[]:Array.isArray(n)||(n=[n]);return n.forEach(e=>{i.push(function(e){return Be(e)?ze(e):"Resource"===e.attributes["rdf:parseType"]?je(e.value):{value:e.value,attributes:We(e),description:ke(e.value)}}(e))}),{value:i,attributes:r,description:ke(i,t)}}(e,t):function(e,t){const n=Ve(e)||Me(e.value);return{value:n,attributes:We(e),description:ke(n,t)}}(e,t)}function Be(e){return"Resource"===e.attributes["rdf:parseType"]&&void 0!==e.value["rdf:value"]||void 0!==e.value["rdf:Description"]&&void 0!==e.value["rdf:Description"].value["rdf:value"]}function ze(e,t){const n=We(e);void 0!==e.value["rdf:Description"]&&(e=e.value["rdf:Description"]),Object.assign(n,We(e),function(e){const t={};for(const n in e.value)"rdf:value"===n||xe(n)||(t[Ne(n)]=e.value[n].value);return t}(e));const r=function(e){return Ve(e.value["rdf:value"])||e.value["rdf:value"].value}(e);return{value:r,attributes:n,description:ke(r,t)}}function We(e){const t={};for(const n in e.attributes)"rdf:parseType"===n||"rdf:resource"===n||xe(n)||(t[Ne(n)]=e.attributes[n]);return t}function _e(e){return e["rdf:Bag"]||e["rdf:Seq"]||e["rdf:Alt"]}function Ve(e){return e.attributes&&e.attributes["rdf:resource"]}function He(e){this.name="MetadataMissingError",this.message=e||"No Exif data",this.stack=(new Error).stack}He.prototype=new Error;var $e={MetadataMissingError:He},Ke={load:function(e,t={expanded:!1}){return qe(function(e){try{return new DataView(e)}catch(t){return new r(e)}}(e),t)},loadView:qe,errors:$e};function qe(e,t={expanded:!1}){let n=!1,r={};U.check(e);const{fileDataOffset:i,tiffHeaderOffset:o,iptcDataOffset:a,xmpDataOffset:s,xmpFieldLength:c}=U.parseAppMarkers(e);if(function(e){return void 0!==e}(i)){n=!0;const o=ee.read(e,i);t.expanded?r.file=o:r=Object.assign({},r,o)}if(function(e){return void 0!==e}(o)){n=!0;const i=Y.read(e,o);t.expanded?r.exif=i:r=Object.assign({},r,i)}if(function(e){return void 0!==e}(a)){n=!0;const i=ve.read(e,a);t.expanded?r.iptc=i:r=Object.assign({},r,i)}if(function(e){return void 0!==e}(s)){n=!0;const i=Fe.read(e,s,c);t.expanded?r.xmp=i:r=Object.assign({},r,i)}if(!n)throw new $e.MetadataMissingError;return r}n.d(t,"readAndCompressImage",function(){return Ye});var Xe={quality:.5,maxWidth:800,maxHeight:600,autoRotate:!0,debug:!1,mimeType:"image/jpeg"};function Ye(e,t){return new Promise(function(n){var r=document.createElement("img"),i=new FileReader,o=Object.assign({},Xe,t);i.onload=function(e){r.src=e.target.result,r.onload=function(){if(o.autoRotate){o.debug&&console.log("browser-image-resizer: detecting image orientation...");var e=function(e){for(var t=atob(e.split(",")[1]),n=new ArrayBuffer(t.length),r=new Uint8Array(n),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return n}(r.src),t={};try{t=Ke.load(e).Orientation||{}}catch(e){}o.debug&&console.log("browser-image-resizer: image orientation from EXIF tag = "+t),n(Je(r,o,t.value))}else o.debug&&console.log("browser-image-resizer: ignoring EXIF orientation tag because autoRotate is false..."),n(Je(r,o))}},i.readAsDataURL(e)})}function Je(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=document.createElement("canvas");r.width=e.width,r.height=e.height;var i=r.getContext("2d");i.save(),function(e,t,n,r){var i=e.width,o=e.style.width,a=e.height,s=e.style.height;n>4&&(e.width=a,e.style.width=s,e.height=i,e.style.height=o);switch(n){case 2:t.translate(i,0),t.scale(-1,1);break;case 3:t.translate(i,a),t.rotate(Math.PI);break;case 4:t.translate(0,a),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-a);break;case 7:t.rotate(.5*Math.PI),t.translate(i,-a),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-i,0)}t.drawImage(r,0,0),t.restore()}(r,i,n,e);for(var o=function(e,t){var n=t.width/t.height,r=Math.min(t.width,e.maxWidth,n*e.maxHeight);e.maxSize>0&&e.maxSize<t.width*t.height/1e3&&(r=Math.min(r,Math.floor(1e3*e.maxSize/t.height)));e.scaleRatio&&(r=Math.min(r,Math.floor(e.scaleRatio*t.width)));e.debug&&(console.log("browser-image-resizer: original image size = "+t.width+" px (width) X "+t.height+" px (height)"),console.log("browser-image-resizer: scaled image size = "+r+" px (width) X "+Math.floor(r/n)+" px (height)"));r<=0&&(r=1,console.warn("browser-image-resizer: image size is too small"));return r}(t,r);r.width>=2*o;)r=Ze(r);r.width>o&&(r=function(e,t){var n=document.createElement("canvas"),r=t.outputWidth/e.width;n.width=e.width*r,n.height=e.height*r;var i=e.getContext("2d").getImageData(0,0,e.width,e.height),o=n.getContext("2d").createImageData(n.width,n.height);return function(e,t,n){function r(e,t,n,r,i,o){var a=1-i,s=1-o;return e*a*s+t*i*s+n*a*o+r*i*o}var i,o,a,s,c,u,d,l,f,p,g,m,h,b,v,S,y,w,I;for(i=0;i<t.height;++i)for(a=i/n,s=Math.floor(a),c=Math.ceil(a)>e.height-1?e.height-1:Math.ceil(a),o=0;o<t.width;++o)u=o/n,d=Math.floor(u),l=Math.ceil(u)>e.width-1?e.width-1:Math.ceil(u),f=4*(o+t.width*i),p=4*(d+e.width*s),g=4*(l+e.width*s),m=4*(d+e.width*c),h=4*(l+e.width*c),b=u-d,v=a-s,S=r(e.data[p],e.data[g],e.data[m],e.data[h],b,v),t.data[f]=S,y=r(e.data[p+1],e.data[g+1],e.data[m+1],e.data[h+1],b,v),t.data[f+1]=y,w=r(e.data[p+2],e.data[g+2],e.data[m+2],e.data[h+2],b,v),t.data[f+2]=w,I=r(e.data[p+3],e.data[g+3],e.data[m+3],e.data[h+3],b,v),t.data[f+3]=I}(i,o,r),n.getContext("2d").putImageData(o,0,0),n}(r,Object.assign(t,{outputWidth:o})));var a=r.toDataURL(t.mimeType,t.quality);return"function"==typeof t.onScale&&t.onScale(a),function(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(t.length),i=new Uint8Array(r),o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return new Blob([r],{type:n})}(a)}function Ze(e){var t=document.createElement("canvas");return t.width=e.width/2,t.height=e.height/2,t.getContext("2d").drawImage(e,0,0,t.width,t.height),t}}])});