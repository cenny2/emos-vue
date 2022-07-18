/**
 * 验证邮箱
 * @param {*} s
 */
export function isEmail(s) {
	return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 验证手机号码
 * @param {*} s
 */
export function isMobile(s) {
	return /^1[0-9]{10}$/.test(s)
}

/**
 * 验证电话号码
 * @param {*} s
 */
export function isPhone(s) {
	return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * 验证URL地址
 * @param {*} s
 */
export function isURL(s) {
	return /^http[s]?:\/\/.*/.test(s)
}

/**
 * 验证用户名://用户名正则，4到16位（字母，数字，下划线，减号）
 * @param {Object} s
 */
export function isUsername(s) {
	return /^[a-zA-Z0-9_-]{4,16}$/.test(s)
}


/**
 * 验证密码:长度至少为8，至少含有一个字母和一个数字
 * @param {Object} s
 */
export function isPassword(s) {
	return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test('qwer1234')
}
