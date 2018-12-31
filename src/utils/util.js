// 简易的Array.prototype.includes
export const includes = (arr, value) => arr.some(el => el === value);

// 删除给定数组arr里items所包含的项
export const without = (arr, ...items) => arr.filter(current => !includes(items, current));

// 判读对象是否为空
export const isEmptyObj = obj => !Object.keys(obj).length;

export const hasClass = (el, className) => {
  const regex = new RegExp(`(^|\\s)${className}(\\s|$)`, 'g');
  return regex.test(el.className);
};

export const addClass = (el, className) => {
  if (hasClass(el, className)) {
    return false;
  }
  el.className += ` ${className}`;
  return true;
};

export const removeClass = (el, className) => {
  if (hasClass(el, className)) {
    const regex = new RegExp(`(^|\\s)${className}(\\s|$)`, 'g');
    el.className = el.className.replace(regex, '');
    return true;
  }
  return false;
};
