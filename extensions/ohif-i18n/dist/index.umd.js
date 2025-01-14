(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('i18next'), require('react-i18next'), require('i18next-browser-languagedetector')) :
  typeof define === 'function' && define.amd ? define(['exports', 'i18next', 'react-i18next', 'i18next-browser-languagedetector'], factory) :
  (global = global || self, factory(global['ohif-i18n'] = {}, global.i18next, global['react-i18next'], global.LngDetector));
}(this, function (exports, i18n, reactI18next, LngDetector) { 'use strict';

  i18n = i18n && i18n.hasOwnProperty('default') ? i18n['default'] : i18n;
  LngDetector = LngDetector && LngDetector.hasOwnProperty('default') ? LngDetector['default'] : LngDetector;

  var debugMode = !!(process.env.NODE_ENV !== 'production' && process.env.REACT_APP_I18N_DEBUG);
  var detectionOptions = {
    // order and from where user language should be detected
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,
    // cache user language on
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'],
    // languages to not persist (cookie, localStorage)
    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement
  };

  var customDebug = (function (message) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'log';

    if (debugMode) {
      // eslint-disable-next-line
      console[level]('@ohif/i18n: ', message);
    }
  });

  var name="@ohif/i18n";var version="0.1.0";var description="OHIF extension for internationalization";var author="OHIF";var license="MIT";var repository="OHIF/Viewers";var main="dist/index.umd.js";var module="dist/index.es.js";var engines={node:">=8",npm:">=5"};var scripts={build:"rollup -c",prepublishOnly:"npm run build"};var peerDependencies={i18next:"^17.0.3","i18next-browser-languagedetector":"^3.0.1",react:"^16.0.0","react-dom":"^16.0.0","react-i18next":"^10.11.0"};var devDependencies={"@babel/core":"^7.2.2","@babel/plugin-external-helpers":"^7.2.0","@babel/plugin-proposal-class-properties":"^7.2.3","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.2.3","@babel/preset-react":"^7.0.0","babel-eslint":"^10.0.1","cross-env":"^5.2.0",eslint:"5.13.0","eslint-plugin-import":"^2.14.0","eslint-plugin-node":"^8.0.0","eslint-plugin-promise":"^4.0.1","eslint-plugin-react":"^7.11.1",husky:"^1.3.1",i18next:"^15.1.3","i18next-browser-languagedetector":"^3.0.1","lint-staged":"^8.1.0",prettier:"^1.15.3",react:"^16.0.0","react-dom":"^16.0.0","react-i18next":"^10.11.0",rollup:"^1.1.2","rollup-plugin-babel":"^4.2.0","rollup-plugin-commonjs":"^9.2.0","rollup-plugin-node-builtins":"^2.1.2","rollup-plugin-node-resolve":"^4.0.0","rollup-plugin-peer-deps-external":"^2.2.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-url":"^2.1.0"};var husky={hooks:{"pre-commit":"lint-staged"}};var browserslist=[">0.2%","not dead","not ie <= 11","not op_mini all"];var files=["dist"];var publishConfig={access:"public"};var dependencies={"@babel/runtime":"^7.2.0",classnames:"^2.2.6","rollup-plugin-json":"^4.0.0"};var pkg = {name:name,version:version,description:description,author:author,license:license,repository:repository,main:main,module:module,"jsnext:main":"dist/index.es.js",engines:engines,scripts:scripts,peerDependencies:peerDependencies,devDependencies:devDependencies,husky:husky,"lint-staged":{"src/**/*.{js,jsx,json,css}":["prettier --single-quote --write","git add"]},browserslist:browserslist,files:files,publishConfig:publishConfig,dependencies:dependencies};

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var objectSpread = _objectSpread;

  var Themes="Themes";var Previous="$t(Common:Previous)";var Next="$t(Common:Next)";var Play="$t(Common:Play)";var Stop="$t(Common:Stop)";var Layout="$t(Common:Layout)";var More="$t(Common:More)";var Crosshairs="Crosshairs";var Magnify="Magnify";var Probe="Probe";var Ellipse="Ellipse";var Rectangle="Rectangle";var Invert="Invert";var Clear="Clear";var Brush="Brush";var Coronal="Coronal";var Measurements="Measurements";var Zoom="Zoom";var Levels="Levels";var Pan="Pan";var Length="Length";var Angle="Angle";var Bidirectional="Bidirectional";var FreehandMouse="FreehandMouse";var Elliptical="Elliptical";var Circle="Circle";var Reset="$t(Common:Reset)";var CINE="CINE";var Acquired="Acquired";var Sagittal="Sagittal";var Axial="Axial";var Manual="Manual";var Save="Save";var Cancel="Cancel";var Buttons = {Themes:Themes,Previous:Previous,Next:Next,Play:Play,Stop:Stop,Layout:Layout,More:More,Crosshairs:Crosshairs,Magnify:Magnify,"ROI Window":"ROI Window",Probe:Probe,Ellipse:Ellipse,Rectangle:Rectangle,Invert:Invert,"Rotate Right":"Rotate Right","Flip H":"Flip H","Flip V":"Flip V",Clear:Clear,Brush:Brush,Coronal:Coronal,"Stack Scroll":"Stack Scroll",Measurements:Measurements,Zoom:Zoom,Levels:Levels,Pan:Pan,Length:Length,Angle:Angle,Bidirectional:Bidirectional,FreehandMouse:FreehandMouse,Elliptical:Elliptical,Circle:Circle,Reset:Reset,CINE:CINE,Acquired:Acquired,Sagittal:Sagittal,Axial:Axial,Manual:Manual,Save:Save,"Reset to Defaults":"$t(Common:Reset) to Defaults",Cancel:Cancel};

  var fps="fps";var CineDialog = {fps:fps,"Skip to first image":"Skip to first $t(Common:Image)","Previous image":"$t(Common:Previous) $t(Common:Image)","Play / Stop":"$t(Common:Play) / $t(Common:Stop)","Next image":"$t(Common:Play) $t(Common:Image)","Skip to last image":"Skip, to last $t(Common:Image)"};

  var Reset$1="Reset";var Previous$1="Previous";var Next$1="Next";var Play$1="Play";var Stop$1="Stop";var Layout$1="Layout";var More$1="More";var Image="Image";var Common = {Reset:Reset$1,Previous:Previous$1,Next:Next$1,Play:Play$1,Stop:Stop$1,Layout:Layout$1,More:More$1,Image:Image};

  var Options="Options";var About="About";var Preferences="Preferences";var Header = {"INVESTIGATIONAL USE ONLY":"INVESTIGATIONAL USE ONLY",Options:Options,About:About,Preferences:Preferences,"Study list":"Study list","Back to Viewer":"Back to Viewer"};

  var Relabel="Relabel";var Description="Description";var Delete="Delete";var Targets="Targets";var NonTargets="NonTargets";var MAX="MAX";var MeasurementTable = {"Criteria nonconformities":"Criteria nonconformities",Relabel:Relabel,Description:Description,Delete:Delete,Targets:Targets,NonTargets:NonTargets,MAX:MAX};

  var Save$1="$t(Buttons:Save)";var Cancel$1="$t(Buttons:Cancel)";var UserPreferencesModal = {"User Preferences":"User Preferences",Save:Save$1,"Reset to Defaults":"$t(Buttons:Reset to Defaults)",Cancel:Cancel$1};

  var About$1="About";var Header$1 = {About:About$1};

  var en_US = {
    'en-US': {
      Header: Header$1
    }
  };

  var About$2="Info";var Header$2 = {About:About$2};

  var en_UK = {
    'en-UK': {
      Header: Header$2
    }
  };

  var en = objectSpread({
    en: {
      Buttons: Buttons,
      CineDialog: CineDialog,
      Common: Common,
      Header: Header,
      MeasurementTable: MeasurementTable,
      UserPreferencesModal: UserPreferencesModal
    }
  }, en_US, en_UK);

  var Themes$1="Temas";var Previous$2="$t(Common:Previous)";var Next$2="$t(Common:Next)";var Play$2="$t(Common:Play)";var Stop$2="$t(Common:Stop)";var Layout$2="$t(Common:Layout)";var More$2="$t(Common:More)";var Crosshairs$1="Cruces";var Magnify$1="Lupa";var Probe$1="Probar";var Ellipse$1="Elipse";var Rectangle$1="Rectángulo";var Invert$1="Invertido";var Clear$1="Limpiar";var Brush$1="Escoba";var Coronal$1="Coronal";var Measurements$1="Medidas";var Zoom$1="Zoom";var Levels$1="Niveles";var Pan$1="Mover";var Length$1="Medición";var Angle$1="Ángulo";var Bidirectional$1="Bidirectional";var FreehandMouse$1="FreehandMouse";var Elliptical$1="Elliptical";var Circle$1="Circle";var Reset$2="$t(Common:Reset)";var CINE$1="CINE";var Acquired$1="Acquired";var Sagittal$1="Sagittal";var Axial$1="Axial";var Manual$1="Manual";var Save$2="Guardar";var Cancel$2="Cancelar";var WWWC="WWWC";var Buttons$1 = {Themes:Themes$1,Previous:Previous$2,Next:Next$2,Play:Play$2,Stop:Stop$2,Layout:Layout$2,More:More$2,Crosshairs:Crosshairs$1,Magnify:Magnify$1,"ROI Window":"Ventana ROI",Probe:Probe$1,Ellipse:Ellipse$1,Rectangle:Rectangle$1,Invert:Invert$1,"Rotate Right":"Rotar ->","Flip H":"Espejo Hor.","Flip V":"Espejo Ver.",Clear:Clear$1,Brush:Brush$1,Coronal:Coronal$1,"Stack Scroll":"Avance X slice",Measurements:Measurements$1,Zoom:Zoom$1,Levels:Levels$1,Pan:Pan$1,Length:Length$1,Angle:Angle$1,Bidirectional:Bidirectional$1,FreehandMouse:FreehandMouse$1,Elliptical:Elliptical$1,Circle:Circle$1,Reset:Reset$2,CINE:CINE$1,Acquired:Acquired$1,Sagittal:Sagittal$1,Axial:Axial$1,Manual:Manual$1,Save:Save$2,"Reset to Defaults":"$t(Common:reset) por defectos",Cancel:Cancel$2,"2D MPR":"2D MPR",WWWC:WWWC};

  var fps$1="fps";var CineDialog$1 = {fps:fps$1,"Skip to first image":"Avanza para la primera $t(Common:Image)","Previous image":"$t(Common:Previous) $t(Common:Image)","Play / Stop":"$t(Common:Play) / $t(Common:Stop)","Next image":"$t(Common:Play) $t(Common:Image)","Skip to last image":"Pular para la ultima $t(Common:Image)"};

  var Reset$3="Reiniciar";var Previous$3="Anterior";var Next$3="Próximo";var Play$3="Play";var Stop$3="Stop";var Layout$3="Esquema";var More$3="Más";var Image$1="Imagen";var Common$1 = {Reset:Reset$3,Previous:Previous$3,Next:Next$3,Play:Play$3,Stop:Stop$3,Layout:Layout$3,More:More$3,Image:Image$1};

  var Options$1="Opciones";var About$3="Sobre";var Preferences$1="Preferencias";var Header$3 = {"INVESTIGATIONAL USE ONLY":"SOLO USO DE INVESTIGACIÓN",Options:Options$1,About:About$3,Preferences:Preferences$1,"Study list":"Lista de estudio","Back to Viewer":"Back to Viewer"};

  var Relabel$1="Reetiquetar";var Description$1="Descripción";var Delete$1="Borrar";var Targets$1="Objetivos";var NonTargets$1="NonObjetivos";var MAX$1="máximo";var Measurements$2="Mediciones";var MeasurementTable$1 = {"Criteria nonconformities":"Criterios de no conformidades",Relabel:Relabel$1,Description:Description$1,Delete:Delete$1,Targets:Targets$1,NonTargets:NonTargets$1,MAX:MAX$1,"Chest Wall Posterior":"Pared pectoral posterior","Bone Extremity":"Extremidad ósea",Measurements:Measurements$2};

  var Save$3="$t(Buttons:Save)";var Cancel$3="$t(Buttons:Cancel)";var UserPreferencesModal$1 = {"User Preferences":"Preferencias de usuario",Save:Save$3,"Reset to Defaults":"$t(Buttons:Reset to Defaults)",Cancel:Cancel$3};

  var Header$4 = {"INVESTIGATIONAL USE ONLY":"SOLO USO DE DESAROLLO"};

  var es_AR = {
    'es-AR': {
      Header: Header$4
    }
  };

  var Header$5 = {"INVESTIGATIONAL USE ONLY":"SOLO USO DE INVESTIGACIÓN"};

  var es_MX = {
    'es-MX': {
      Header: Header$5
    }
  };

  var es = objectSpread({
    es: {
      Buttons: Buttons$1,
      CineDialog: CineDialog$1,
      Common: Common$1,
      Header: Header$3,
      MeasurementTable: MeasurementTable$1,
      UserPreferencesModal: UserPreferencesModal$1
    }
  }, es_AR, es_MX);

  var locales = objectSpread({}, en, es);

  function addLocales(newLocales) {
    customDebug("Adding locales ".concat(newLocales), 'info');
    var resourceBundle = [];
    Object.keys(newLocales).map(function (key) {
      Object.keys(newLocales[key]).map(function (namespace) {
        var locale = newLocales[key][namespace];
        resourceBundle.push({
          key: key,
          namespace: namespace,
          locale: locale
        });
        i18n.addResourceBundle(key, namespace, locale, true, true);
      });
    });
    customDebug("Locales added successfully", 'info');
    customDebug(resourceBundle, 'info');
  }

  function initI18n() {
    var detection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : detectionOptions;
    i18n.use(LngDetector).use(reactI18next.initReactI18next).init({
      resources: locales,
      debug: debugMode,
      keySeparator: false,
      interpolation: {
        escapeValue: false
      },
      detection: detection,
      fallbackNS: ['Common'],
      defaultNS: 'Common',
      react: {
        wait: true
      }
    }).then(function (t) {
      exports.t = t;
      customDebug("t function available.", 'info');
    });
  }

  customDebug("version ".concat(pkg.version, " loaded."), 'info');
  initI18n();

  exports.addLocales = addLocales;
  exports.default = i18n;
  exports.initI18n = initI18n;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
