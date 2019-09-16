// 引入模块
import { add, arr, obj } from './demo';

describe('测试整体描述', () => {
	// 周期方法
	beforeEach(() => {
		console.log('beforeEach')
	})
	afterEach(() => {
		console.log('afterEach')
	})
	beforeAll(() => {
		console.log('beforeAll')
	})
	afterAll(() => {
		console.log('afterAll')
	})
	// 进行测试
	it('测试加法', () => {
		// 断言
		expect(add(1, 2))
			// 预测解构
			.toBe(3)
			// .toBe(4)
	})
	it('测试数组', () => {
		expect(arr)
			.toContain(2)
			// .toContain(5)
	})
	it('测试对象属性', () => {
		expect(obj.color)
		// expect(obj.msg)
			.toBeDefined()
	})
})