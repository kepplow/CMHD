import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import Navigator from '@/components/Navigator';
import { Button, Carousel, QRCode, Tabs, Tooltip } from 'antd';
import banner1 from '@/assets/images/banner1.png';
import banner2 from '@/assets/images/banner2.png';
import image1 from '@/assets/images/index_image1.png';
import image2 from '@/assets/images/index_image2.png';
import image3 from '@/assets/images/index_image3.png';
import image4 from '@/assets/images/index_image4.png';
import image5 from '@/assets/images/index_image5.png';
import image6 from '@/assets/images/index_image6.png';
import image7 from '@/assets/images/index_image7.png';
import image8 from '@/assets/images/index_image8.png';
import image9 from '@/assets/images/index_image9.png';
import image10 from '@/assets/images/index_image10.png';
import image11 from '@/assets/images/index_image11.png';
import styles from './index.less';

import { ArrowUpOutlined, PhoneOutlined, QrcodeOutlined } from '@ant-design/icons';

const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  const onChange = (index: number) => {
    console.log('onChange', index);
  }
  return (
    <div className={styles.pageWrapper}>
      <Carousel afterChange={onChange} autoplay dotPosition="bottom" dots={{ className: styles.dots }}>
        <div className='relative'>
          <img src={banner1} className='w-100% h-auto' />
          <Button className='absolute top-60% left-20%' color='#e91a3e'>立即合作</Button>
        </div>
        <div>
          <img src={banner2} className='w-100% h-auto' />
        </div>
      </Carousel>
      <div className='px-10%'>
        <div className='mt-140px'>
          <div className='relative pt-20px'>
            <img src={image3} alt="aboutUsTitleImage" className='w-500px absolute left-0 top-0' />
            <span className='text-40px font-bold ml-20px'>关于CM</span>
          </div>
          <div className='flex items-center gap-24px mt-20px'>
            <div className='w-60%'><img src={image1} alt="aboutCM" className='h-100% w-100% object-contain' /></div>
            <div className='flex-1 flex flex-col gap-10px'>
              <div>辰木互动科技（成都）有限公司是一家以助力“品牌生意增长”为导向的⼩红书整合营销服务公司，自2019年成立以来专注于深耕⼩红书整合营销并连续5年保持业绩高速增长，现有员工300余人。</div>
              <div>辰木专注于以科技的创新驱动品牌增长。通过多年成熟的生意增长模型，陆续进行AI智能化营销系统部署，驱动营销降本增效；针对营销痛点研发BI数据中台，实现营销数据追踪力和结果可视化，为品牌提供覆盖淘宝的全域营销数据量化和生意增长解决方案。</div>
              <div>我们以⼩红书业务为基础，后持续拓展抖音、视频号等业务板块，已为国内外500+消费品牌提供专业的市场洞察诊断，增长策略规划、内容策划、KOL采买、数字化广告投放等营销服务，以数据为导向帮助品牌实现生意增长。</div>
            </div>
          </div>
          <div className='mt-20px'>
            <img src={image2} className='w-100% object-contain mt-20px' />
            <div className='flex items-center justify-center'>
              <Button color='#e91a3e' className='mt-20px'>查看更多</Button>
            </div>
          </div>
        </div>


        <div className='mt-80px'>
          <img src={image4} className='w-100% object-contain mt-20px' />
          <div className='flex items-center justify-center'>
            <Button color='#e91a3e' className='mt-20px'>查看更多</Button>
          </div>
        </div>

        <div className='relative mt-80px'>
          <img src={image5} className='w-100% object-contain mt-20px' />
          <div className='absolute flex w-60% h-64% bottom-0 left-20% flex gap-10%'>
            <div
              className='flex-1 cursor-pointer'
              onClick={() => {
                console.log(1)
              }}></div>
            <div
              className='flex-1 cursor-pointer'
              onClick={() => {
                console.log(2)
              }}></div>
          </div>
        </div>
        <div className='pt-80px'>
          <img src={image6} className='w-100% object-contain mt-20px' />
        </div>
        <div className='mt-80px'>
          <img src={image7} className='w-100% object-contain mt-20px' />
          <Tabs
            className='mt-20px'
            defaultActiveKey="1"
            centered
            items={[{
              key: '品牌产品焕新',
              label: '品牌产品焕新',
              children: <img src={image8} className='w-100% object-contain mt-20px' />
            }, {
              key: '品牌生意增长',
              label: '品牌生意增长',
              children: <img src={image9} className='w-100% object-contain mt-20px' />
            }]}
          />
          <div className='flex items-center justify-center'>
            <Button color='#e91a3e' className='mt-20px'>查看更多</Button>
          </div>
        </div>
        <div className='mt-140px'>
          <img src={image10} className='w-100% object-contain' />
          <img src={image11} className='w-100% object-contain mt-20px' />
        </div>
      </div>
      <div className='fixed bottom-10px right-20px z-10 flex flex-col items-center'>
        <Tooltip
          title={
            <div className='flex flex-col items-center'>
              <QRCode value={'-'} size={100} />
              <div>CMHD小助理</div>
            </div>
          }
          placement='left'
          color='#ddd'>
          <div className='rounded-8px w-60px h-60px border flex-center text-12px flex-col cursor-pointer bg-white'>
            <QrcodeOutlined className='text-20px mb-10px' />
            微信客服
          </div>
        </Tooltip>
        <Tooltip title={
          <div className='flex flex-col items-center'>
            <div>CMHD</div>
            <div>13018266229</div>
          </div>
        }
          color='gray'
          placement='left'
        >
          <div className='w-60px h-60px border flex-center text-12px flex-col cursor-pointer bg-white rounded-8px'>
            <PhoneOutlined className='text-20px mb-10px' />
            电话咨询
          </div>
        </Tooltip>
        <div className='rounded-8px w-50px h-50px flex-center cursor-pointer border mt-20px' onClick={() => {
          window.scrollTo(0, 0)
        }}>
          <ArrowUpOutlined className='text-30px ' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
