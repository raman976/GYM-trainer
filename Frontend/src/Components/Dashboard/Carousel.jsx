import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const Slide = styled.div`
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;
const Card = styled.div`
  width: 50vw;
  height: 40vh;
  background: linear-gradient(#111111, #020202);
  display: flex;
  padding: 12%;
  border: 1px solid #9CA3AF;
  flex-direction: column;
  border-radius: 10px;
    justify-content: center;
    align-items: start;
  font-size: 18px;
  p {
    line-height: 1.5;
    color: white;
    font-size: 20px;
  }
  h4 {
    margin-top: 5%;
    color: white;
    font-size: 20px;
  }
  h5 {
    color: #99a0ac;
  }
`;

const StarContainer = styled.div`
  display: flex;
  gap: 2%;
  margin-bottom: 5%;
`;

const Star = styled(FaStar)`
  color: #fbbf24;
  font-size: 20px;
`;
export default function Carousel() {
return (
    <>
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
            }}
        >
            <h1 style={{ color: "orange" ,fontSize:"2.7rem"}}>What are users saying?</h1>
        </div>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            speed={4000}
            loopedSlides={3}
            freeMode={false}
            freeModeMomentum={false}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            pagination={false}
            allowTouchMove={true}
            navigation={false}
            
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{marginBottom:"010%"}}
        >
            <SwiperSlide>
                <CardWrapper>
                    <Card>
                        <StarContainer>
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} />
                            ))}
                        </StarContainer>
                        <p>
                            "This app has completely transformed my fitness journey. The personalized plans keep me motivated and on track every day!"
                        </p>
                        <h4>Emily Carter</h4>
                        <h5>Yoga Instructor</h5>
                    </Card>
                </CardWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <CardWrapper>
                    <Card>
                        <StarContainer>
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} />
                            ))}
                        </StarContainer>
                        <p>
                            "I love how easy it is to use this app. It saves me so much time and ensures I get the most out of my workouts."
                        </p>
                        <h4>Michael Brown</h4>
                        <h5>Personal Trainer</h5>
                    </Card>
                </CardWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <CardWrapper>
                    <Card>
                        <StarContainer>
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} />
                            ))}
                        </StarContainer>
                        <p>
                            "The AI recommendations are spot on! I've seen significant improvements in my strength and endurance."
                        </p>
                        <h4>Sarah Wilson</h4>
                        <h5>Marathon Runner</h5>
                    </Card>
                </CardWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <CardWrapper>
                    <Card>
                        <StarContainer>
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} />
                            ))}
                        </StarContainer>
                        <p>
                            "This app makes fitness accessible to everyone. The variety of exercises keeps things fresh and exciting!"
                        </p>
                        <h4>David Lee</h4>
                        <h5>Fitness Blogger</h5>
                    </Card>
                </CardWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <CardWrapper>
                    <Card>
                        <StarContainer>
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} />
                            ))}
                        </StarContainer>
                        <p>
                            "I never thought working out at home could be this effective. The app's guidance is top-notch!"
                        </p>
                        <h4>Olivia Martinez</h4>
                        <h5>Home Fitness Enthusiast</h5>
                    </Card>
                </CardWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <CardWrapper>
                    <Card>
                        <StarContainer>
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} />
                            ))}
                        </StarContainer>
                        <p>
                            "The app's intuitive design and AI-driven insights have made my fitness routine seamless and enjoyable."
                        </p>
                        <h4>Chris Evans</h4>
                        <h5>Tech Entrepreneur</h5>
                    </Card>
                </CardWrapper>
            </SwiperSlide>
            <SwiperSlide>
                <CardWrapper>
                    <Card>
                        <StarContainer>
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} />
                            ))}
                        </StarContainer>
                        <p>
                            "Thanks to this app, I've achieved my fitness goals faster than I ever imagined. Highly recommend it!"
                        </p>
                        <h4>Sophia Taylor</h4>
                        <h5>Health Coach</h5>
                    </Card>
                </CardWrapper>
            </SwiperSlide>
        </Swiper>
    </>
);
}
