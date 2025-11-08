import { useMediaQuery } from "react-responsive"
import {performanceImages} from "../constants"
import { useRef } from "react"
import gsap from "gsap"

const Performance = () => {
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'})
  const sectionRef = useRef(null)

  gsap.fromTo(
    ".content p",
    {opacity: 0, y: 10},
    {
      opacity:1,
      y:0,
      duration:0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".content p",
        start: "top bottom",
        end: "top center",
        strub:true,
        invalidateOnRefresh: true,
      }
    }
  )

  if(isMobile) return;

  const timeline = gsap.timeline
  return (
    <section id="performance">
      <h2>Next-level graphics performance. Game on.</h2>
      <div className="wrapper">
        {performanceImages.map((image) => (
          <img src={image.src} alt={image.id} key={image.id} />
        ))}
      </div>
      <div className="content">
        <p>Run graphics-intensive workflows with a responsiveness that keeps ups with your imagination. The M4 family of chips features a GPU  with a second-generation harware-accelerated ray tracing that renders images faster, so <span className="text-white">gaming feels more immersive and realistic than ever.</span> And Dynamic Caching optimizes last on-chip memory to dramatically increase average GPU utilization -- driving a huge performance boost for the most demanding pro apps and games.</p>
      </div>
    </section>
  )
}

export default Performance
