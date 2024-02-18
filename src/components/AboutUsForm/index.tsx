import React, { useCallback, useRef, useState } from 'react'
import { Button, Form, Input, Modal, message } from 'antd'
import CodeInput from '@/components/CodeInput'
import { customerInput } from '@/services/form'
const AboutUsForm: React.FC = () => {
  const [form] = Form.useForm();
  const captcha = useRef('');
  // 验证码改变存储最新值
  const captchaChange = (value: string) => {
    captcha.current = value;
  }
  // 表单提交
  const submit = () => {
    form.validateFields().then((values) => {
      customerInput(values).then(res => {
        message.success('提交成功')
      })
    })
  }
  return <div className='flex justify-between items-center p-24px'>
    <div className='flex-1 '>
      <span className='text-30px'>关于CM</span>
      <div className='flex flex-col gap-10px mt-20px'>
        <div>我们连续5年</div>
        <div>
          专注于小红书营销业务
        </div>
        <div>
          不断地深耕打磨、与创新...
        </div>
        <div>
          只为在不同阶段、不同场景下
        </div>

        为您实现品牌生意增长</div>
    </div>
    <div className='flex-1'>
      <Form
        form={form}
        layout='vertical'
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: '请输入姓名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="电话"
          name="phoneNumber"
          rules={[{ required: true, message: '请输入电话' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="公司或品牌"
          name="brand"
          rules={[{ required: true, message: '请输入公司或品牌' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="业务需求"
          name="demand"
          rules={[{ required: true, message: '请输入业务需求' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="验证码"
          name="code"
          required
          rules={[{
            required: true,
            validator: (rule, value: string, callback) => {
              if (!value) {
                return callback('请输入验证码');
              }
              // 对比用户输入和存储验证码是否一致，验证码不区分大小写
              if (value.toLowerCase() !== captcha.current) {
                return callback('验证码错误');
              }
              return Promise.resolve();
            }
          }]}
        >
          <CodeInput onCaptchaChange={captchaChange} />
        </Form.Item>
      </Form>
      <div className='flex justify-center items-center'>
        <Button onClick={submit} color='#e91a3e'>方案获取</Button>
      </div>
    </div>

  </div>
}
export default AboutUsForm
