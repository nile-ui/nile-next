import Image from 'next/image'
import { Hero, Title, Subtitle, Text, Button, Avatar } from '@nile-ui/nile-ui'

export default function Home() {
  return (
    <Hero halfScreen>
      <Hero.Body className='relative'>
        <div className='w-100 md-w-50 flex flex-column justify-center'>
          <Title variant={4}>NILE UI</Title>
          <Subtitle
            fontSize={5}
            lineHeight='base'
            color='darkestGray'
            className='mb-30'
          >
            Free, open source and modular{' '}
            <Text weight={500} color='dark'>
              ui framework
            </Text>{' '}
            that has built-in
            <Text weight={500} color='dark'>
              {' '}
              responsive
            </Text>{' '}
            components.
          </Subtitle>
          <div className='flex align-center'>
            <Button color='primary' size='lg' className='mr-10'>
              Get Started
            </Button>
            <Button color='primary' flat size='lg' className='mr-10'>
              Download
            </Button>
            <a
              target='_blank'
              className='flex align-center'
              href='https://github.com/nile-ui/nile-ui'
            >
              <Button color='dark' bordered size='mini' className='fs-2'>
                <i className='ri-github-fill'></i>
              </Button>
            </a>
          </div>
        </div>
        <div id='samples_container'>
          <div className='relative md-block hidden' id='samples'>
            <div
              id='sample-1'
              className='card type-3'
              style={{ maxWidth: '400px' }}
            >
              <div className='card-img'>
                <figure className='figure size-1by1' style={{ width: '25rem' }}>
                  <Image width={400} height={400} src='/photo2.jpg' alt='' />
                </figure>
                <div className='card-interactions'>
                  <Button icon color='error'>
                    <i className='ri-heart-line'></i>
                  </Button>
                  <Button icon className='ml-5'>
                    <i className='ri-message-3-line'></i>
                    <span className='ml-5'>60</span>
                  </Button>
                </div>
              </div>
              <div className='card-content'>
                <h5 className='card-title'>Default Card Design</h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, ducimus?
                </p>
              </div>
            </div>
            <Button color='primary' id='sample-2'>
              Primary Button
            </Button>
            <div id='sample-3' className='form-element has-icon-before'>
              <input
                type='text'
                className='input primary shadow'
                placeholder='Name'
              />
              <div className='input-icon'>
                <i className='ri-user-follow-line'></i>
              </div>
            </div>
            <div id='sample-4' className='dropdown hoverable'>
              <Button className='shadow has-carret'>Hoverable Dropdown</Button>
              <div className='dropdown-content'>
                <div className='dropdown-menu'>
                  <h5 className='dropdown-title'>Dropdown title</h5>
                  <div className='dropdown-item'>Dropdown Item</div>
                  <div className='dropdown-item'>Dropdown Item</div>
                </div>
              </div>
            </div>
            <div
              id='sample-5'
              className='shadow border-radius-3 p-10'
              style={{ width: '70px' }}
            >
              <span className='spinner xl primary border-radius-2'></span>
            </div>

            <Avatar
              color='primary'
              size='xl'
              id='sample-6'
              className='shadow-lg'
              showBadge
              badgeColor='error'
            >
              N
            </Avatar>
            <div
              id='sample-7'
              className='card type-5'
              style={{ maxWidth: '350px' }}
            >
              <div className='card-img'>
                <Image src='/photo1.jpg' width={350} height={350} alt='' />
                <div className='card-interactions top-left'>
                  <Button icon color='success'>
                    <i className='ri-check-line'></i>
                  </Button>
                  <Button icon className='ml-5'>
                    <i className='ri-message-3-line'></i>
                    <span className='ml-5'>60</span>
                  </Button>
                </div>
              </div>
              <div className='card-content'>
                <h5 className='card-title'>Default Card Design</h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, ducimus?
                </p>
              </div>
            </div>
            <div className='form-element' id='sample-8'>
              <span className='label ml-0'>On/Off</span>
              <input
                type='checkbox'
                id='switch-primary-square'
                className='switch primary square'
                checked
                readOnly
              />
              <label htmlFor='switch-primary-square'></label>
            </div>
            <div
              className='progress infinite primary'
              id='sample-9'
              style={{ width: '200px' }}
            >
              <div className='progressbar'></div>
            </div>
            <div className='form-element horizontal' id='sample-10'>
              <div className='checkbox-group'>
                <input
                  id='check_2'
                  type='checkbox'
                  className='checkbox primary'
                  placeholder='Name'
                  checked
                  readOnly
                />
                <label className='label' htmlFor='check_2'>
                  Checkbox
                </label>
              </div>
            </div>
          </div>
        </div>
      </Hero.Body>
    </Hero>
  )
}
