(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return withSmartKnobs}));__webpack_require__(1),__webpack_require__(12),__webpack_require__(18),__webpack_require__(20),__webpack_require__(78),__webpack_require__(32),__webpack_require__(58),__webpack_require__(128),__webpack_require__(26),__webpack_require__(13),__webpack_require__(21),__webpack_require__(59),__webpack_require__(48),__webpack_require__(226),__webpack_require__(28),__webpack_require__(34),__webpack_require__(65),__webpack_require__(39),__webpack_require__(733),__webpack_require__(734),__webpack_require__(4),__webpack_require__(11),__webpack_require__(127),__webpack_require__(42),__webpack_require__(38),__webpack_require__(130),__webpack_require__(14),__webpack_require__(163),__webpack_require__(33),__webpack_require__(15);var react__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__(0),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__(253),_storybook_client_logger__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__(45),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__(35);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var QUOTED_STRING_REGEXP=/^['"](.*)['"]$/,cleanupValue=function(value){return"string"==typeof value?value.replace(QUOTED_STRING_REGEXP,"$1"):value},knobResolvers={},addKnobResolver=function(_ref){var name=_ref.name,resolver=_ref.resolver,_ref$weight=_ref.weight,weight=void 0===_ref$weight?0:_ref$weight;return knobResolvers[name]={name:name,resolver:resolver,weight:weight}},propTypeKnobResolver=function(name,regexp,knob){for(var _len=arguments.length,args=Array(3<_len?_len-3:0),_key=3;_key<_len;_key++)args[_key-3]=arguments[_key];return function(propName,propType,value){return propType.type.name===name||regexp&&regexp.test(propType.type.name)?knob.apply(void 0,[propName,value].concat(args)):void 0}},flowTypeKnobsMap=[{name:"signature",knob:function knob(name,value){return value||Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_31__.action)(name)}},{name:"boolean",knob:_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_33__.boolean}],propTypeKnobsMap=[{name:"string",knob:_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_33__.text},{name:"number",knob:_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_33__.number},{name:"bool",knob:_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_33__.boolean},{name:"func",regexp:/=>/,knob:function knob(name,value){return value||Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_31__.action)(name)}},{name:"object",regexp:/^{.*}$/,knob:_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_33__.object},{name:"node",regexp:/^ReactNode$/,knob:_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_33__.text},{name:"element",knob:_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_33__.text},{name:"array",regexp:/\[]$|^\[.*]$/,knob:_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_33__.object}];[].concat(flowTypeKnobsMap,propTypeKnobsMap).forEach((function(_ref2,weight){var name=_ref2.name,regexp=_ref2.regexp,knob=_ref2.knob,_ref2$args=_ref2.args,args=void 0===_ref2$args?[]:_ref2$args;return addKnobResolver({weight:10*weight,name:"PropTypes.".concat(name),resolver:propTypeKnobResolver.apply(void 0,[name,regexp,knob].concat(_toConsumableArray(args)))})}));var optionsReducer=function(res,value){return _objectSpread({},res,_defineProperty({},value,value))},createSelect=function(propName,elements,defaultValue,isRequired){try{var options=elements.map((function(value){return cleanupValue(value.value)})).reduce(optionsReducer,{}),value=defaultValue||isRequired&&Object.values(options)[0]||void 0;return Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_33__.select)(propName,isRequired?options:function(options){return _objectSpread({"--":void 0},options)}(options),value)}catch(e){}};addKnobResolver({name:"PropTypes.oneOf",resolver:function resolver(propName,propType,defaultValue){return"enum"===propType.type.name&&propType.type.value.length?createSelect(propName,propType.type.value,defaultValue,propType.required):"union"===propType.type.name&&propType.type.elements?createSelect(propName,propType.type.elements,defaultValue,propType.required):void 0}});var getNewProps=function(target,context,opts){var _target$type$__docgen=target.type.__docgenInfo,props=(_target$type$__docgen=void 0===_target$type$__docgen?{props:{}}:_target$type$__docgen).props,_opts$ignoreProps=opts.ignoreProps,ignoreProps=void 0===_opts$ignoreProps?[]:_opts$ignoreProps,defaultProps=_objectSpread({},target.type.defaultProps||{},{},target.props),finalProps=props?Object.keys(props).reduce((function(acc,n){var item=function(item){return item.flowType?_objectSpread({},item,{type:item.flowType}):item}(props[n]);if(ignoreProps.includes(n))return acc;if(!item.type){var defaultValue=item.defaultValue?item.defaultValue.value:"Unknown";return _storybook_client_logger__WEBPACK_IMPORTED_MODULE_32__.logger.warn("There is a prop with defaultValue ".concat(defaultValue," but it wasn't specified on element.propTypes. Check story: \"").concat(context.kind,'".')),acc}return _objectSpread({},acc,_defineProperty({},n,item))}),{}):{};return resolvePropValues(finalProps,defaultProps)},mutateChildren=function(component,context,opts){return Object(react__WEBPACK_IMPORTED_MODULE_30__.cloneElement)(component,{children:react__WEBPACK_IMPORTED_MODULE_30__.Children.map(component.props.children,(function(child){if(child.type&&child.type.__docgenInfo){var newProps=getNewProps(child,context,opts);return Object(react__WEBPACK_IMPORTED_MODULE_30__.cloneElement)(child,_objectSpread({},child.props,{},newProps))}return child.props&&child.props.children?mutateChildren(child,context,opts):child}))})},withSmartKnobs=function(){var opts=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function(story,context){var component=story(context);if(!component.type.__docgenInfo&&component.props.children)return mutateChildren(component,context,opts);var newProps=getNewProps(component,context,opts);return Object(react__WEBPACK_IMPORTED_MODULE_30__.cloneElement)(component,newProps)}},resolvePropValues=function(propTypes,defaultProps){var propNames=Object.keys(propTypes),resolvers=Object.keys(knobResolvers).sort((function(a,b){return knobResolvers[a].weight<knobResolvers[b].weight})).map((function(name){return knobResolvers[name].resolver}));return propNames.map((function(propName){return resolvers.reduce((function(value,resolver){var propType=propTypes[propName]||{},defaultValue=defaultProps[propName]||propType.defaultValue&&cleanupValue(propType.defaultValue.value||"")||void 0;return void 0!==value?value:resolver(propName,propType,defaultValue)}),void 0)})).reduce((function(props,value,i){return _objectSpread({},props,_defineProperty({},propNames[i],void 0!==value?value:defaultProps[propNames[i]]))}),defaultProps)}},109:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(3);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_PropTable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(82);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}var SmartKnobedComponent=function(props){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PropTable__WEBPACK_IMPORTED_MODULE_3__.a,_extends({},props,{docgenInfo:SmartKnobedComponent.__docgenInfo}))};SmartKnobedComponent.displayName="SmartKnobedComponent",SmartKnobedComponent.propTypes={bool:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,number:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,string:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,func:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,oneOf:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["one","two","three"]),object:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,element:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,node:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node},SmartKnobedComponent.__docgenInfo={description:"",methods:[],displayName:"SmartKnobedComponent",props:{bool:{type:{name:"bool"},required:!1,description:""},number:{type:{name:"number"},required:!1,description:""},string:{type:{name:"string"},required:!1,description:""},func:{type:{name:"func"},required:!1,description:""},oneOf:{type:{name:"enum",value:[{value:"'one'",computed:!1},{value:"'two'",computed:!1},{value:"'three'",computed:!1}]},required:!1,description:""},object:{type:{name:"object"},required:!1,description:""},element:{type:{name:"element"},required:!1,description:""},node:{type:{name:"node"},required:!1,description:""}}},__webpack_exports__.a=SmartKnobedComponent,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/stories/SmartKnobedComponent.js"]={name:"SmartKnobedComponent",docgenInfo:SmartKnobedComponent.__docgenInfo,path:"example/stories/SmartKnobedComponent.js"})},1239:function(module,exports,__webpack_require__){var api=__webpack_require__(390),content=__webpack_require__(1240);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1240:function(module,exports,__webpack_require__){(exports=__webpack_require__(391)(!1)).push([module.i,".PropTable {\n  border: 1px solid #999;\n  color: #333;\n  font-family: monospace;\n  border-collapse:collapse;\n  font-size: 1.5em;\n  text-align: left;\n}\n\n.PropTable thead {\n  font-style: italic;\n  font-size: 0.85em;\n}\n\n.PropTable th {\n  background-color: #eee;\n}\n\n.PropTable th,\n.PropTable td {\n  border: 0.05em solid #999;\n  min-width: 1em;\n  padding: 0.4em;\n}\n",""]),module.exports=exports},406:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_PropTable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(82),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"You should see a console.warn about a prop with default value bar."),SmartKnobedComponentMissingProps=function(_ref){var _ref$foo=_ref.foo,foo=void 0===_ref$foo?"":_ref$foo,_ref$bar=_ref.bar,bar=void 0===_ref$bar?"bar":_ref$bar;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,_ref2,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PropTable__WEBPACK_IMPORTED_MODULE_2__.a,{foo:foo,bar:bar,docgenInfo:SmartKnobedComponentMissingProps.__docgenInfo}))};SmartKnobedComponentMissingProps.displayName="SmartKnobedComponentMissingProps",SmartKnobedComponentMissingProps.propTypes={foo:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired},SmartKnobedComponentMissingProps.__docgenInfo={description:"",methods:[],displayName:"SmartKnobedComponentMissingProps",props:{foo:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},bar:{defaultValue:{value:"'bar'",computed:!1},required:!1}}},__webpack_exports__.a=SmartKnobedComponentMissingProps,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/stories/SmartKnobedComponentMissingProps.js"]={name:"SmartKnobedComponentMissingProps",docgenInfo:SmartKnobedComponentMissingProps.__docgenInfo,path:"example/stories/SmartKnobedComponentMissingProps.js"})},407:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(3);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_PropTable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(82);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}var SmartKnobedComponent=function(props){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PropTable__WEBPACK_IMPORTED_MODULE_2__.a,_extends({},props,{docgenInfo:SmartKnobedComponent.__docgenInfo}))};SmartKnobedComponent.displayName="SmartKnobedComponent",SmartKnobedComponent.__docgenInfo={description:"",methods:[],displayName:"SmartKnobedComponent",props:{bool:{required:!0,flowType:{name:"boolean"},description:""},number:{required:!0,flowType:{name:"number"},description:""},string:{required:!0,flowType:{name:"string"},description:""},func:{required:!0,flowType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oneOf:{required:!0,flowType:{name:"union",raw:"'one' | 'two' | 'three'",elements:[{name:"literal",value:"'one'"},{name:"literal",value:"'two'"},{name:"literal",value:"'three'"}]},description:""},object:{required:!0,flowType:{name:"signature",type:"object",raw:"{}",signature:{properties:[]}},description:""}}},__webpack_exports__.a=SmartKnobedComponent,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/stories/SmartKnobedComponentWithFlow.js"]={name:"SmartKnobedComponent",docgenInfo:SmartKnobedComponent.__docgenInfo,path:"example/stories/SmartKnobedComponentWithFlow.js"})},408:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return SmartKnobedComponentWithTypescript}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_PropTable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(82),__assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},SmartKnobedComponentWithTypescript=function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PropTable__WEBPACK_IMPORTED_MODULE_1__.a,__assign({},props,{docgenInfo:SmartKnobedComponentWithTypescript.__docgenInfo}))};try{SmartKnobedComponentWithTypescript.displayName="SmartKnobedComponentWithTypescript",SmartKnobedComponentWithTypescript.__docgenInfo={description:"",displayName:"SmartKnobedComponentWithTypescript",props:{bool:{defaultValue:null,description:"",name:"bool",required:!0,type:{name:"boolean"}},number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},string:{defaultValue:null,description:"",name:"string",required:!0,type:{name:"string"}},func:{defaultValue:null,description:"",name:"func",required:!0,type:{name:"() => void"}},object:{defaultValue:null,description:"",name:"object",required:!0,type:{name:"{}"}},node:{defaultValue:null,description:"",name:"node",required:!0,type:{name:"ReactNode"}},oneOf:{defaultValue:null,description:"",name:"oneOf",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'},{value:'"three"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/stories/SmartKnobedComponentWithTypescript.tsx#SmartKnobedComponentWithTypescript"]={docgenInfo:SmartKnobedComponentWithTypescript.__docgenInfo,name:"SmartKnobedComponentWithTypescript",path:"example/stories/SmartKnobedComponentWithTypescript.tsx#SmartKnobedComponentWithTypescript"})}catch(__react_docgen_typescript_loader_error){}},409:function(module,exports,__webpack_require__){__webpack_require__(410),__webpack_require__(552),module.exports=__webpack_require__(553)},472:function(module,exports){},553:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(83);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(732)}),module)}.call(this,__webpack_require__(303)(module))},732:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(28);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(83),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(108),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(35),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(392),_SmartKnobedComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(109),_SmartKnobedComponentMissingProps__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(406),_SmartKnobedComponentWithFlow__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(407),_SmartKnobedComponentWithTypescript__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(408),_ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SmartKnobedComponent__WEBPACK_IMPORTED_MODULE_6__.a,null),_ref2=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SmartKnobedComponentWithFlow__WEBPACK_IMPORTED_MODULE_8__.a,null),_ref3=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SmartKnobedComponentWithTypescript__WEBPACK_IMPORTED_MODULE_9__.a,null),_ref4=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,"Title"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SmartKnobedComponent__WEBPACK_IMPORTED_MODULE_6__.a,null));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Basic",module).addDecorator(Object(_src__WEBPACK_IMPORTED_MODULE_3__.a)()).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs).add("proptypes",(function(){return _ref})).add("flow",(function(){return _ref2})).add("typescript",(function(){return _ref3})).add("nested example",(function(){return _ref4}));var _ref5=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SmartKnobedComponent__WEBPACK_IMPORTED_MODULE_6__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("withInfo",module).addDecorator(Object(_src__WEBPACK_IMPORTED_MODULE_3__.a)()).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs).addDecorator(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_5__.withInfo).add("proptypes",(function(){return _ref5}));var _ref6=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SmartKnobedComponentMissingProps__WEBPACK_IMPORTED_MODULE_7__.a,{foo:"baz"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Missing props",module).addDecorator(Object(_src__WEBPACK_IMPORTED_MODULE_3__.a)()).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs).add("example",(function(){return _ref6})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Manual knobs",module).addDecorator((function(fn){return fn()})).addDecorator(Object(_src__WEBPACK_IMPORTED_MODULE_3__.a)()).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs).add("example",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SmartKnobedComponent__WEBPACK_IMPORTED_MODULE_6__.a,{string:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.select)("string",["1","2","3"],"2")})})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Ignore Props",module).addDecorator(Object(_src__WEBPACK_IMPORTED_MODULE_3__.a)({ignoreProps:["number"]})).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs).add("proptypes",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SmartKnobedComponent__WEBPACK_IMPORTED_MODULE_6__.a,{number:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.date)("date",new Date)})}))}.call(this,__webpack_require__(303)(module))},757:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":356,"./nestedObjectAssign.js":356};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=757},82:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PropTable}));__webpack_require__(1),__webpack_require__(12),__webpack_require__(18),__webpack_require__(10),__webpack_require__(13),__webpack_require__(21),__webpack_require__(34),__webpack_require__(4),__webpack_require__(11),__webpack_require__(14),__webpack_require__(15);var react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),prop_types__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(7),prop_types__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);__webpack_require__(1239);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _ref2=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("th",null,"Property"),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("th",null,"PropType"),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("th",null,"Value"),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("th",null,"typeof"))),_ref3=react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("i",null,"function"),PropTable=function(_ref){var docgenInfo=_ref.docgenInfo,props=_objectWithoutProperties(_ref,["docgenInfo"]);return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("table",{className:"PropTable"},_ref2,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tbody",null,Object.keys(props).map((function(prop){return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("tr",{key:prop},react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("th",null,prop),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td",null,(docgenInfo.props[prop].type||docgenInfo.props[prop].flowType||{}).name),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td",null,"function"==typeof props[prop]?_ref3:JSON.stringify(props[prop])||"(empty)"),react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("td",null,_typeof(props[prop])))}))))};PropTable.displayName="PropTable",PropTable.propTypes={docgenInfo:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired},PropTable.__docgenInfo={description:"",methods:[],displayName:"PropTable",props:{docgenInfo:{type:{name:"object"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/stories/PropTable.js"]={name:"PropTable",docgenInfo:PropTable.__docgenInfo,path:"example/stories/PropTable.js"})}},[[409,1,2]]]);
//# sourceMappingURL=main.bce5f54c3f81224eba6c.bundle.js.map