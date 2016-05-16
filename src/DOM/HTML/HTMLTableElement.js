"use strict";

// module DOM.HTML.HTMLTableElement

exports.caption = function (table) {
  return function () {
    return table.caption;
  };
};

exports.setCaption = function (caption) {
  return function (table) {
    return function () {
      table.caption = caption;
    };
  };
};

// ----------------------------------------------------------------------------

exports.createCaption = function (table) {
  return function () {
    return table.createCaption();
  };
};

// ----------------------------------------------------------------------------

exports.deleteCaption = function (table) {
  return function () {
    table.deleteCaption();
  };
};

// ----------------------------------------------------------------------------

exports.tHead = function (table) {
  return function () {
    return table.tHead;
  };
};

exports.setTHead = function (tHead) {
  return function (table) {
    return function () {
      table.tHead = tHead;
    };
  };
};

// ----------------------------------------------------------------------------

exports.createTHead = function (table) {
  return function () {
    return table.createTHead();
  };
};

// ----------------------------------------------------------------------------

exports.deleteTHead = function (table) {
  return function () {
    table.deleteTHead();
  };
};

// ----------------------------------------------------------------------------

exports.tFoot = function (table) {
  return function () {
    return table.tFoot;
  };
};

exports.setTFoot = function (tFoot) {
  return function (table) {
    return function () {
      table.tFoot = tFoot;
    };
  };
};

// ----------------------------------------------------------------------------

exports.createTFoot = function (table) {
  return function () {
    return table.createTFoot();
  };
};

// ----------------------------------------------------------------------------

exports.deleteTFoot = function (table) {
  return function () {
    table.deleteTFoot();
  };
};

// ----------------------------------------------------------------------------

exports.tBodies = function (table) {
  return function () {
    return table.tBodies;
  };
};

// ----------------------------------------------------------------------------

exports.createTBody = function (table) {
  return function () {
    return table.createTBody();
  };
};

// ----------------------------------------------------------------------------

exports.rows = function (table) {
  return function () {
    return table.rows;
  };
};

// ----------------------------------------------------------------------------

exports["insertRow'"] = function (table) {
  return function (index) {
    return function () {
      return table.insertRow(index);
    };
  };
};

// ----------------------------------------------------------------------------

exports.deleteRow = function (table) {
  return function (index) {
    return function () {
      table.deleteRow(index);
    };
  };
};

// ----------------------------------------------------------------------------

exports.border = function (table) {
  return function () {
    return table.border;
  };
};

exports.setBorder = function (border) {
  return function (table) {
    return function () {
      table.border = border;
    };
  };
};
