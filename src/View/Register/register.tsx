// import { useState } from 'react'
import HeaderNoLogin from '../../common/Header/headerNologin'
import { Input, Flex, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import background from '../../assets/background.svg'
import { Link } from 'react-router-dom';

// import {Button} from 'antd'
const imgStyle: React.CSSProperties = {
  display: 'block',
  width: '50%',
};
function Register() {
//   const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HeaderNoLogin/>
        <div className="login-container" style={{ marginLeft: '23%', marginTop: 64 }}>
          <Flex>
            <img
              alt="avatar"
              src={background}
              style={imgStyle}
            />
            <Flex vertical align="flex-end" justify="center" gap="middle" style={{ padding: 32 }}>
              <div style={{fontSize: 32}}>
              一键登录简职
              <br />
              开启简单求职
              </div>
              <Input
                placeholder="输入账号"
              ></Input>
              <Input.Password
                placeholder="输入密码"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
              <span>
              <Button type="primary" style={{right:10}}>
              <Link to="/login">返回</Link>
              </Button>
              <Button type="default" href="https://ant.design" target="_blank">
                注册
              </Button>
              </span>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  )
}

export default Register
