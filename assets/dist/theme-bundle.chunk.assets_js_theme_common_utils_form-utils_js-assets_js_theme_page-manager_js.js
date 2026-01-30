"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_common_utils_form-utils_js-assets_js_theme_page-manager_js"],{

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var forms = {
  email: function email(value) {
    var re = /^\S+@\S+\.\S+/;
    return re.test(value);
  },
  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },
  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  },
  /**
   * validates a field like product quantity
   * @param value
   * @returns {boolean}
   *
   */
  numbersOnly: function numbersOnly(value) {
    var re = /^\d+$/;
    return re.test(value);
  },
  /**
   * validates increase in value does not exceed max
   * @param {number} value
   * @param {number} max
   * @returns {number}
   *
   */
  validateIncreaseAgainstMaxBoundary: function validateIncreaseAgainstMaxBoundary(value, max) {
    var raise = value + 1;
    if (!max || raise <= max) return raise;
    return value;
  },
  /**
   * validates decrease in value does not fall below min
   * @param {number} value
   * @param {number} min
   * @returns {number}
   *
   */
  validateDecreaseAgainstMinBoundary: function validateDecreaseAgainstMinBoundary(value, min) {
    var decline = value - 1;
    if (!min || decline >= min) return decline;
    return value;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./assets/js/theme/common/nod-functions/min-max-validate.js":
/*!******************************************************************!*\
  !*** ./assets/js/theme/common/nod-functions/min-max-validate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNaN */ "./node_modules/lodash/isNaN.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function minMaxValidate(minInputSelector, maxInputSelector) {
  function validate(cb) {
    var minValue = parseFloat($(minInputSelector).val());
    var maxValue = parseFloat($(maxInputSelector).val());
    if (maxValue > minValue || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(maxValue) || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(minValue)) {
      return cb(true);
    }
    return cb(false);
  }
  return validate;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minMaxValidate);

/***/ }),

/***/ "./assets/js/theme/common/nod.js":
/*!***************************************!*\
  !*** ./assets/js/theme/common/nod.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nod-validate */ "./node_modules/nod-validate/nod.js");
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nod_validate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nod-functions/min-max-validate */ "./assets/js/theme/common/nod-functions/min-max-validate.js");



// Hook our SCSS framework form field status classes into the nod validation system before use
(nod_validate__WEBPACK_IMPORTED_MODULE_0___default().classes).errorClass = 'form-field--error';
(nod_validate__WEBPACK_IMPORTED_MODULE_0___default().classes).successClass = 'form-field--success';
(nod_validate__WEBPACK_IMPORTED_MODULE_0___default().classes).errorMessageClass = 'form-inlineMessage';

// Register validate functions
(nod_validate__WEBPACK_IMPORTED_MODULE_0___default().checkFunctions)['min-max'] = _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((nod_validate__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./assets/js/theme/common/utils/form-utils.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/form-utils.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validators: () => (/* binding */ Validators),
/* harmony export */   announceInputErrorMessage: () => (/* binding */ announceInputErrorMessage),
/* harmony export */   classifyForm: () => (/* binding */ classifyForm),
/* harmony export */   createPasswordValidationErrorTextObject: () => (/* binding */ createPasswordValidationErrorTextObject),
/* harmony export */   insertStateHiddenField: () => (/* binding */ insertStateHiddenField)
/* harmony export */ });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/forms */ "./assets/js/theme/common/models/forms.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");





var inputTagNames = ['input', 'select', 'textarea'];
/**
 * Set up Object with Error Messages on Password Validation. Please use messages in mentioned order
 * @param {string} empty defines error text for empty field
 * @param {string} confirm defines error text for empty confirmation field
 * @param {string} mismatch defines error text if confirm passford mismatches passford field
 * @param {string} invalid defines error text for invalid password charaters sequence
 * @return {object} messages or default texts if nothing is providing
 */
var createPasswordValidationErrorTextObject = function createPasswordValidationErrorTextObject(empty, confirm, mismatch, invalid) {
  return {
    onEmptyPasswordErrorText: empty,
    onConfirmPasswordErrorText: confirm,
    onMismatchPasswordErrorText: mismatch,
    onNotValidPasswordErrorText: invalid
  };
};

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName;

  // Input can be text/checkbox/radio etc...
  if (tagName === 'input') {
    var inputType = $input.prop('type');
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  }

  // Apply class modifier
  return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }
  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', '));

  // Obtain options
  var _options = options,
    _options$formFieldCla = _options.formFieldClass,
    formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla;

  // Classify each input in a form
  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);
  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }
  return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}

/**
 * Announce form input error message by screen reader
 * @param {params.element} dom input element where checking is happened
 * @param {params.result} result of validation check
 */
function announceInputErrorMessage(_ref) {
  var element = _ref.element,
    result = _ref.result;
  if (result) {
    return;
  }
  var activeInputContainer = $(element).parent();
  // the reason for using span tag is nod-validate lib
  // which does not add error message class while initialising form.
  // specific class is added since it can be multiple spans
  var errorMessage = $(activeInputContainer).find('span.form-inlineMessage');
  if (errorMessage.length) {
    var $errMessage = $(errorMessage[0]);
    if (!$errMessage.attr('role')) {
      $errMessage.attr('role', 'alert');
    }
  }
}
var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   * @param {string} errorText describes errorMassage on email validation
   */
  setEmailValidation: function setEmailValidation(validator, field, errorText) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
          cb(result);
        },
        errorMessage: errorText
      });
    }
  },
  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param {object} errorTextsObject
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, _ref2, isOptional) {
    var onEmptyPasswordErrorText = _ref2.onEmptyPasswordErrorText,
      onConfirmPasswordErrorText = _ref2.onConfirmPasswordErrorText,
      onMismatchPasswordErrorText = _ref2.onMismatchPasswordErrorText,
      onNotValidPasswordErrorText = _ref2.onNotValidPasswordErrorText;
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: onEmptyPasswordErrorText
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

        // If optional and nothing entered, it is valid
        if (isOptional && val.length === 0) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: onNotValidPasswordErrorText
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: onConfirmPasswordErrorText
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: onMismatchPasswordErrorText
    }];
    validator.add(passwordValidations);
  },
  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors, priceValidationErrorTexts) {
    if (priceValidationErrorTexts === void 0) {
      priceValidationErrorTexts = {};
    }
    var errorSelector = selectors.errorSelector,
      fieldsetSelector = selectors.fieldsetSelector,
      formSelector = selectors.formSelector,
      maxPriceSelector = selectors.maxPriceSelector,
      minPriceSelector = selectors.minPriceSelector;

    // eslint-disable-next-line object-curly-newline
    var _priceValidationError = priceValidationErrorTexts,
      onMinPriceError = _priceValidationError.onMinPriceError,
      onMaxPriceError = _priceValidationError.onMaxPriceError,
      minPriceNotEntered = _priceValidationError.minPriceNotEntered,
      maxPriceNotEntered = _priceValidationError.maxPriceNotEntered,
      onInvalidPrice = _priceValidationError.onInvalidPrice;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class
    });
    validator.add({
      errorMessage: onMinPriceError,
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: onMaxPriceError,
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: maxPriceNotEntered,
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: minPriceNotEntered,
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: onInvalidPrice,
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field, errorText) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: errorText
      });
    }
  },
  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value]);
      }
    });
  }
};


/***/ }),

/***/ "./assets/js/theme/page-manager.js":
/*!*****************************************!*\
  !*** ./assets/js/theme/page-manager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageManager)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var PageManager = /*#__PURE__*/function () {
  function PageManager(context) {
    this.context = context;
  }
  var _proto = PageManager.prototype;
  _proto.type = function type() {
    return this.constructor.name;
  };
  _proto.onReady = function onReady() {};
  PageManager.load = function load(context) {
    var page = new this(context);
    $(document).ready(function () {
      page.onReady.bind(page)();
    });
  };
  return PageManager;
}();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fdXRpbHNfZm9ybS11dGlsc19qcy1hc3NldHNfanNfdGhlbWVfcGFnZS1tYW5hZ2VyX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUc7RUFDVkMsS0FBSyxXQUFBQSxNQUFDQyxLQUFLLEVBQUU7SUFDVCxJQUFNQyxFQUFFLEdBQUcsZUFBZTtJQUMxQixPQUFPQSxFQUFFLENBQUNDLElBQUksQ0FBQ0YsS0FBSyxDQUFDO0VBQ3pCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lHLFFBQVEsV0FBQUEsU0FBQ0gsS0FBSyxFQUFFO0lBQ1osT0FBTyxJQUFJLENBQUNJLFFBQVEsQ0FBQ0osS0FBSyxDQUFDO0VBQy9CLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSUksUUFBUSxXQUFBQSxTQUFDSixLQUFLLEVBQUU7SUFDWixPQUFPQSxLQUFLLENBQUNLLE1BQU0sR0FBRyxDQUFDO0VBQzNCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSUMsV0FBVyxXQUFBQSxZQUFDTixLQUFLLEVBQUU7SUFDZixJQUFNQyxFQUFFLEdBQUcsT0FBTztJQUNsQixPQUFPQSxFQUFFLENBQUNDLElBQUksQ0FBQ0YsS0FBSyxDQUFDO0VBQ3pCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJTyxrQ0FBa0MsV0FBQUEsbUNBQUNQLEtBQUssRUFBRVEsR0FBRyxFQUFFO0lBQzNDLElBQU1DLEtBQUssR0FBR1QsS0FBSyxHQUFHLENBQUM7SUFFdkIsSUFBSSxDQUFDUSxHQUFHLElBQUlDLEtBQUssSUFBSUQsR0FBRyxFQUFFLE9BQU9DLEtBQUs7SUFDdEMsT0FBT1QsS0FBSztFQUNoQixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSVUsa0NBQWtD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QyxDQUFDQyxLQUFLLENBQUMsWUFBTTtNQUNwQkYsSUFBSSxDQUFDRixPQUFPLENBQUNLLElBQUksQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQVAsV0FBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21vZGVscy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbm9kLWZ1bmN0aW9ucy9taW4tbWF4LXZhbGlkYXRlLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9ub2QuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvcGFnZS1tYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1zID0ge1xuICAgIGVtYWlsKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlID0gL15cXFMrQFxcUytcXC5cXFMrLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgYSBwYXNzd29yZCBmaWVsZFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBhc3N3b3JkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdEVtcHR5KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdmFsaWRhdGVzIGlmIGEgZmllbGQgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqL1xuICAgIG5vdEVtcHR5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZXMgYSBmaWVsZCBsaWtlIHByb2R1Y3QgcXVhbnRpdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqL1xuICAgIG51bWJlcnNPbmx5KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlID0gL15cXGQrJC87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdmFsaWRhdGVzIGluY3JlYXNlIGluIHZhbHVlIGRvZXMgbm90IGV4Y2VlZCBtYXhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKlxuICAgICAqL1xuICAgIHZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkodmFsdWUsIG1heCkge1xuICAgICAgICBjb25zdCByYWlzZSA9IHZhbHVlICsgMTtcblxuICAgICAgICBpZiAoIW1heCB8fCByYWlzZSA8PSBtYXgpIHJldHVybiByYWlzZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZXMgZGVjcmVhc2UgaW4gdmFsdWUgZG9lcyBub3QgZmFsbCBiZWxvdyBtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKlxuICAgICAqL1xuICAgIHZhbGlkYXRlRGVjcmVhc2VBZ2FpbnN0TWluQm91bmRhcnkodmFsdWUsIG1pbikge1xuICAgICAgICBjb25zdCBkZWNsaW5lID0gdmFsdWUgLSAxO1xuXG4gICAgICAgIGlmICghbWluIHx8IGRlY2xpbmUgPj0gbWluKSByZXR1cm4gZGVjbGluZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmZ1bmN0aW9uIG1pbk1heFZhbGlkYXRlKG1pbklucHV0U2VsZWN0b3IsIG1heElucHV0U2VsZWN0b3IpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShjYikge1xuICAgICAgICBjb25zdCBtaW5WYWx1ZSA9IHBhcnNlRmxvYXQoJChtaW5JbnB1dFNlbGVjdG9yKS52YWwoKSk7XG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gcGFyc2VGbG9hdCgkKG1heElucHV0U2VsZWN0b3IpLnZhbCgpKTtcblxuICAgICAgICBpZiAobWF4VmFsdWUgPiBtaW5WYWx1ZSB8fCBfLmlzTmFOKG1heFZhbHVlKSB8fCBfLmlzTmFOKG1pblZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNiKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pbk1heFZhbGlkYXRlO1xuIiwiaW1wb3J0IG5vZCBmcm9tICdub2QtdmFsaWRhdGUnO1xuaW1wb3J0IG1pbk1heFZhbGlkYXRlIGZyb20gJy4vbm9kLWZ1bmN0aW9ucy9taW4tbWF4LXZhbGlkYXRlJztcblxuLy8gSG9vayBvdXIgU0NTUyBmcmFtZXdvcmsgZm9ybSBmaWVsZCBzdGF0dXMgY2xhc3NlcyBpbnRvIHRoZSBub2QgdmFsaWRhdGlvbiBzeXN0ZW0gYmVmb3JlIHVzZVxubm9kLmNsYXNzZXMuZXJyb3JDbGFzcyA9ICdmb3JtLWZpZWxkLS1lcnJvcic7XG5ub2QuY2xhc3Nlcy5zdWNjZXNzQ2xhc3MgPSAnZm9ybS1maWVsZC0tc3VjY2Vzcyc7XG5ub2QuY2xhc3Nlcy5lcnJvck1lc3NhZ2VDbGFzcyA9ICdmb3JtLWlubGluZU1lc3NhZ2UnO1xuXG4vLyBSZWdpc3RlciB2YWxpZGF0ZSBmdW5jdGlvbnNcbm5vZC5jaGVja0Z1bmN0aW9uc1snbWluLW1heCddID0gbWluTWF4VmFsaWRhdGU7XG5cbmV4cG9ydCBkZWZhdWx0IG5vZDtcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4uL25vZCc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vbW9kZWxzL2Zvcm1zJztcblxuY29uc3QgaW5wdXRUYWdOYW1lcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG5dO1xuLyoqXG4gKiBTZXQgdXAgT2JqZWN0IHdpdGggRXJyb3IgTWVzc2FnZXMgb24gUGFzc3dvcmQgVmFsaWRhdGlvbi4gUGxlYXNlIHVzZSBtZXNzYWdlcyBpbiBtZW50aW9uZWQgb3JkZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbXB0eSBkZWZpbmVzIGVycm9yIHRleHQgZm9yIGVtcHR5IGZpZWxkXG4gKiBAcGFyYW0ge3N0cmluZ30gY29uZmlybSBkZWZpbmVzIGVycm9yIHRleHQgZm9yIGVtcHR5IGNvbmZpcm1hdGlvbiBmaWVsZFxuICogQHBhcmFtIHtzdHJpbmd9IG1pc21hdGNoIGRlZmluZXMgZXJyb3IgdGV4dCBpZiBjb25maXJtIHBhc3Nmb3JkIG1pc21hdGNoZXMgcGFzc2ZvcmQgZmllbGRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnZhbGlkIGRlZmluZXMgZXJyb3IgdGV4dCBmb3IgaW52YWxpZCBwYXNzd29yZCBjaGFyYXRlcnMgc2VxdWVuY2VcbiAqIEByZXR1cm4ge29iamVjdH0gbWVzc2FnZXMgb3IgZGVmYXVsdCB0ZXh0cyBpZiBub3RoaW5nIGlzIHByb3ZpZGluZ1xuICovXG5leHBvcnQgY29uc3QgY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0ID0gKGVtcHR5LCBjb25maXJtLCBtaXNtYXRjaCwgaW52YWxpZCkgPT4gKHtcbiAgICBvbkVtcHR5UGFzc3dvcmRFcnJvclRleHQ6IGVtcHR5LFxuICAgIG9uQ29uZmlybVBhc3N3b3JkRXJyb3JUZXh0OiBjb25maXJtLFxuICAgIG9uTWlzbWF0Y2hQYXNzd29yZEVycm9yVGV4dDogbWlzbWF0Y2gsXG4gICAgb25Ob3RWYWxpZFBhc3N3b3JkRXJyb3JUZXh0OiBpbnZhbGlkLFxufSk7XG5cblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGFuIGlucHV0IGVsZW1lbnQgb24gaXRzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1GaWVsZENsYXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmZ1bmN0aW9uIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKSB7XG4gICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgY29uc3QgJGZvcm1GaWVsZCA9ICRpbnB1dC5wYXJlbnQoYC4ke2Zvcm1GaWVsZENsYXNzfWApO1xuICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke3RhZ05hbWV9YDtcbiAgICBsZXQgc3BlY2lmaWNDbGFzc05hbWU7XG5cbiAgICAvLyBJbnB1dCBjYW4gYmUgdGV4dC9jaGVja2JveC9yYWRpbyBldGMuLi5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQucHJvcCgndHlwZScpO1xuXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKFsncmFkaW8nLCAnY2hlY2tib3gnLCAnc3VibWl0J10sIGlucHV0VHlwZSkpIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0tY2hlY2tib3gsIC5mb3JtLWZpZWxkLS1yYWRpb1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke18uY2FtZWxDYXNlKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0taW5wdXQgLmZvcm0tZmllbGQtLWlucHV0VGV4dFxuICAgICAgICAgICAgc3BlY2lmaWNDbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9JHtfLmNhcGl0YWxpemUoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY2xhc3MgbW9kaWZpZXJcbiAgICByZXR1cm4gJGZvcm1GaWVsZFxuICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuICAgICAgICAuYWRkQ2xhc3Moc3BlY2lmaWNDbGFzc05hbWUpO1xufVxuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gZWFjaCBpbnB1dCBlbGVtZW50IGluIGEgZm9ybSBiYXNlZCBvbiBpdHMgdHlwZVxuICogQGV4YW1wbGVcbiAqIC8vIEJlZm9yZVxuICogPGZvcm0gaWQ9XCJmb3JtXCI+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gKiAgICAgPC9kaXY+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPHNlbGVjdD4uLi48L3NlbGVjdD5cbiAqICAgICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqXG4gKiBjbGFzc2lmeUZvcm0oJyNmb3JtJywgeyBmb3JtRmllbGRDbGFzczogJ2Zvcm0tZmllbGQnIH0pO1xuICpcbiAqIC8vIEFmdGVyXG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1pbnB1dCBmb3JtLWZpZWxkLS1pbnB1dFRleHRcIj4uLi48L2Rpdj5cbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNlbGVjdFwiPi4uLjwvZGl2PlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gZm9ybVNlbGVjdG9yIC0gc2VsZWN0b3Igb3IgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge2pRdWVyeX0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Rm9ybShmb3JtU2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRmb3JtID0gJChmb3JtU2VsZWN0b3IpO1xuICAgIGNvbnN0ICRpbnB1dHMgPSAkZm9ybS5maW5kKGlucHV0VGFnTmFtZXMuam9pbignLCAnKSk7XG5cbiAgICAvLyBPYnRhaW4gb3B0aW9uc1xuICAgIGNvbnN0IHsgZm9ybUZpZWxkQ2xhc3MgPSAnZm9ybS1maWVsZCcgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyBDbGFzc2lmeSBlYWNoIGlucHV0IGluIGEgZm9ybVxuICAgICRpbnB1dHMuZWFjaCgoX18sIGlucHV0KSA9PiB7XG4gICAgICAgIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkZm9ybTtcbn1cblxuLyoqXG4gKiBHZXQgaWQgZnJvbSBnaXZlbiBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRmaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZpZWxkSWQoJGZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9ICRmaWVsZC5wcm9wKCduYW1lJykubWF0Y2goLyhcXFsuKlxcXSkvKTtcblxuICAgIGlmIChmaWVsZElkICYmIGZpZWxkSWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBmaWVsZElkWzBdO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBJbnNlcnQgaGlkZGVuIGZpZWxkIGFmdGVyIFN0YXRlL1Byb3ZpbmNlIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJHN0YXRlRmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICovXG5mdW5jdGlvbiBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRzdGF0ZUZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9IGdldEZpZWxkSWQoJHN0YXRlRmllbGQpO1xuICAgIGNvbnN0IHN0YXRlRmllbGRBdHRycyA9IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIG5hbWU6IGBGb3JtRmllbGRJc1RleHQke2ZpZWxkSWR9YCxcbiAgICAgICAgdmFsdWU6ICcxJyxcbiAgICB9O1xuXG4gICAgJHN0YXRlRmllbGQuYWZ0ZXIoJCgnPGlucHV0IC8+Jywgc3RhdGVGaWVsZEF0dHJzKSk7XG59XG5cbi8qKlxuICogQW5ub3VuY2UgZm9ybSBpbnB1dCBlcnJvciBtZXNzYWdlIGJ5IHNjcmVlbiByZWFkZXJcbiAqIEBwYXJhbSB7cGFyYW1zLmVsZW1lbnR9IGRvbSBpbnB1dCBlbGVtZW50IHdoZXJlIGNoZWNraW5nIGlzIGhhcHBlbmVkXG4gKiBAcGFyYW0ge3BhcmFtcy5yZXN1bHR9IHJlc3VsdCBvZiB2YWxpZGF0aW9uIGNoZWNrXG4gKi9cbmZ1bmN0aW9uIGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UoeyBlbGVtZW50LCByZXN1bHQgfSkge1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVJbnB1dENvbnRhaW5lciA9ICQoZWxlbWVudCkucGFyZW50KCk7XG4gICAgLy8gdGhlIHJlYXNvbiBmb3IgdXNpbmcgc3BhbiB0YWcgaXMgbm9kLXZhbGlkYXRlIGxpYlxuICAgIC8vIHdoaWNoIGRvZXMgbm90IGFkZCBlcnJvciBtZXNzYWdlIGNsYXNzIHdoaWxlIGluaXRpYWxpc2luZyBmb3JtLlxuICAgIC8vIHNwZWNpZmljIGNsYXNzIGlzIGFkZGVkIHNpbmNlIGl0IGNhbiBiZSBtdWx0aXBsZSBzcGFuc1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICQoYWN0aXZlSW5wdXRDb250YWluZXIpLmZpbmQoJ3NwYW4uZm9ybS1pbmxpbmVNZXNzYWdlJyk7XG5cbiAgICBpZiAoZXJyb3JNZXNzYWdlLmxlbmd0aCkge1xuICAgICAgICBjb25zdCAkZXJyTWVzc2FnZSA9ICQoZXJyb3JNZXNzYWdlWzBdKTtcblxuICAgICAgICBpZiAoISRlcnJNZXNzYWdlLmF0dHIoJ3JvbGUnKSkge1xuICAgICAgICAgICAgJGVyck1lc3NhZ2UuYXR0cigncm9sZScsICdhbGVydCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvclRleHQgZGVzY3JpYmVzIGVycm9yTWFzc2FnZSBvbiBlbWFpbCB2YWxpZGF0aW9uXG4gICAgICovXG4gICAgc2V0RW1haWxWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JUZXh0KSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yVGV4dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRTZWxlY3RvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZDJTZWxlY3RvclxuICAgICAqIEBwYXJhbSByZXF1aXJlbWVudHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JUZXh0c09iamVjdFxuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXG4gICAgICovXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCB7XG4gICAgICAgIG9uRW1wdHlQYXNzd29yZEVycm9yVGV4dCwgb25Db25maXJtUGFzc3dvcmRFcnJvclRleHQsIG9uTWlzbWF0Y2hQYXNzd29yZEVycm9yVGV4dCwgb25Ob3RWYWxpZFBhc3N3b3JkRXJyb3JUZXh0LFxuICAgIH0sIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25FbXB0eVBhc3N3b3JkRXJyb3JUZXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLmFscGhhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5udW1lcmljKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5sZW5ndGggPj0gcmVxdWlyZW1lbnRzLm1pbmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvcHRpb25hbCBhbmQgbm90aGluZyBlbnRlcmVkLCBpdCBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCAmJiB2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBvbk5vdFZhbGlkUGFzc3dvcmRFcnJvclRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25Db25maXJtUGFzc3dvcmRFcnJvclRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25NaXNtYXRjaFBhc3N3b3JkRXJyb3JUZXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMsIHByaWNlVmFsaWRhdGlvbkVycm9yVGV4dHMgPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9ID0gc2VsZWN0b3JzO1xuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxuICAgICAgICBjb25zdCB7IG9uTWluUHJpY2VFcnJvciwgb25NYXhQcmljZUVycm9yLCBtaW5QcmljZU5vdEVudGVyZWQsIG1heFByaWNlTm90RW50ZXJlZCwgb25JbnZhbGlkUHJpY2UgfSA9IHByaWNlVmFsaWRhdGlvbkVycm9yVGV4dHM7XG5cbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAnbWluLW51bWJlcjowJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLnNldE1lc3NhZ2VPcHRpb25zKHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICBwYXJlbnQ6IGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBlcnJvclNwYW46IGVycm9yU2VsZWN0b3IsXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JUZXh0KSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JUZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCwgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWQoY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYWdlID0gbmV3IHRoaXMoY29udGV4dCk7XG5cbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgcGFnZS5vblJlYWR5LmJpbmQocGFnZSkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImZvcm1zIiwiZW1haWwiLCJ2YWx1ZSIsInJlIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJsZW5ndGgiLCJudW1iZXJzT25seSIsInZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkiLCJtYXgiLCJyYWlzZSIsInZhbGlkYXRlRGVjcmVhc2VBZ2FpbnN0TWluQm91bmRhcnkiLCJtaW4iLCJkZWNsaW5lIiwibWluTWF4VmFsaWRhdGUiLCJtaW5JbnB1dFNlbGVjdG9yIiwibWF4SW5wdXRTZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJtaW5WYWx1ZSIsInBhcnNlRmxvYXQiLCIkIiwidmFsIiwibWF4VmFsdWUiLCJfaXNOYU4iLCJub2QiLCJjbGFzc2VzIiwiZXJyb3JDbGFzcyIsInN1Y2Nlc3NDbGFzcyIsImVycm9yTWVzc2FnZUNsYXNzIiwiY2hlY2tGdW5jdGlvbnMiLCJpbnB1dFRhZ05hbWVzIiwiY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0IiwiZW1wdHkiLCJjb25maXJtIiwibWlzbWF0Y2giLCJpbnZhbGlkIiwib25FbXB0eVBhc3N3b3JkRXJyb3JUZXh0Iiwib25Db25maXJtUGFzc3dvcmRFcnJvclRleHQiLCJvbk1pc21hdGNoUGFzc3dvcmRFcnJvclRleHQiLCJvbk5vdFZhbGlkUGFzc3dvcmRFcnJvclRleHQiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiRmb3JtRmllbGQiLCJwYXJlbnQiLCJ0YWdOYW1lIiwicHJvcCIsInRvTG93ZXJDYXNlIiwiY2xhc3NOYW1lIiwic3BlY2lmaWNDbGFzc05hbWUiLCJpbnB1dFR5cGUiLCJfaW5jbHVkZXMiLCJfY2FtZWxDYXNlIiwiX2NhcGl0YWxpemUiLCJhZGRDbGFzcyIsImNsYXNzaWZ5Rm9ybSIsImZvcm1TZWxlY3RvciIsIm9wdGlvbnMiLCIkZm9ybSIsIiRpbnB1dHMiLCJmaW5kIiwiam9pbiIsIl9vcHRpb25zIiwiX29wdGlvbnMkZm9ybUZpZWxkQ2xhIiwiZWFjaCIsIl9fIiwiZ2V0RmllbGRJZCIsIiRmaWVsZCIsImZpZWxkSWQiLCJtYXRjaCIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCIkc3RhdGVGaWVsZCIsInN0YXRlRmllbGRBdHRycyIsInR5cGUiLCJuYW1lIiwiYWZ0ZXIiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiX3JlZiIsImVsZW1lbnQiLCJyZXN1bHQiLCJhY3RpdmVJbnB1dENvbnRhaW5lciIsImVycm9yTWVzc2FnZSIsIiRlcnJNZXNzYWdlIiwiYXR0ciIsIlZhbGlkYXRvcnMiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJ2YWxpZGF0b3IiLCJmaWVsZCIsImVycm9yVGV4dCIsImFkZCIsInNlbGVjdG9yIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRTZWxlY3RvciIsInBhc3N3b3JkMlNlbGVjdG9yIiwicmVxdWlyZW1lbnRzIiwiX3JlZjIiLCJpc09wdGlvbmFsIiwiJHBhc3N3b3JkIiwicGFzc3dvcmRWYWxpZGF0aW9ucyIsIlJlZ0V4cCIsImFscGhhIiwibnVtZXJpYyIsIm1pbmxlbmd0aCIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInNlbGVjdG9ycyIsInByaWNlVmFsaWRhdGlvbkVycm9yVGV4dHMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiX3ByaWNlVmFsaWRhdGlvbkVycm9yIiwib25NaW5QcmljZUVycm9yIiwib25NYXhQcmljZUVycm9yIiwibWluUHJpY2VOb3RFbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJjb25maWd1cmUiLCJmb3JtIiwicHJldmVudFN1Ym1pdCIsInNldE1lc3NhZ2VPcHRpb25zIiwiZXJyb3JTcGFuIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCIkZmllbGRDbGFzc0VsZW1lbnQiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3Byb3RvIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJvblJlYWR5IiwibG9hZCIsInBhZ2UiLCJkb2N1bWVudCIsInJlYWR5IiwiYmluZCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9
