const NavbarItems = [
    {
        head : "About",
        reff : '/'
    },
    {
        head : "Experience",
        reff : '/Experience'
    },
    {
        head : "Projects",
        reff : '/Projects'
    },
    {
        head : "Resume",
        reff : '/Resume'
    },
    {
        head : "Contact",
        reff : '/Contact'
    }
]

export const Intern1Skills = [ "React.Js","Node.Js","RESTful APIs","Express.Js","MongoDB","Machine Learning"]

export const socialMedia = [
    {
        svgPath : "/social-media/github.svg",
        url : "https://github.com/s0umith"
    },
    {
        svgPath : "/social-media/insta.svg",
        url : "https://www.instagram.com/s0umith/"
    },
    {
        svgPath : "/social-media/linkedin.svg",
        url : "https://www.linkedin.com/in/s0umith/"
    },
    {
        svgPath : "/social-media/mail.svg",
        url : "mailto:batta083@umn.edu"
    },
]

export const experienceData = [
    {
        "internRole": "Computer Vision and AI/ML Intern",
        "companyName": "AddiGuru",
        "period": "May 2025 - Present",
        "imgLink": "/AddiGuru.png",
        "info": "Developed 3D reconstruction system for additive manufacturing models using layer-by-layer imaging, reducing computational overhead by 41% while enabling real-time defect visualization in manufacturing processes. Implemented advanced part detection algorithms utilizing Mask2Former and Swin Transformer models, achieving 96.4% detection accuracy and reducing false positives by 35%. Collaborated with clients to analyze requirements and customize software solutions, resulting in high satisfaction and tailored features.",
        "skills": ["Computer Vision", "3D Reconstruction", "Mask2Former", "Swin Transformer", "Python", "PyTorch", "Additive Manufacturing", "Real-time Systems"]
     },
    {
        "internRole": "Research Intern",
        "companyName": "ADMiRE Research Center, Carinthia University of Applied Sciences (FH Kärnten)",
        "period": "May 2023 - July 2023",
        "imgLink": "/villach.jpg",
        "info": "Engineered geometric inverse kinematics solution using ROS/Python, reducing configuration errors by 87% in harvesting motion. Designed a kinematics-based control system with quaternion interpolation, achieving sub-millimeter positioning accuracy. Implemented real-time motion planning in ROS, reducing harvest cycle time by approximately 25%.",
        "skills": ["ROS", "Python", "Matlab", "Kinematics", "Motion Planning", "Quaternion Interpolation"]
    },
    {
        "internRole": "Research Intern",
        "companyName": "Intelligent Guidance Control Laboratory, IIT Kanpur",
        "period": "May 2022 - August 2022",
        "imgLink": "/swarm.jpg",
        "info": "Developed swarm consensus algorithms in ROS/Gazebo, coordinating 8 quadrotors with 98% formation accuracy in obstacle-free environments. Engineered ESP32-based mesh network protocol, reducing communication latency to 50ms between swarm nodes. Integrated MoCap and RTK-GPS data, achieving 2cm position accuracy for seamless outdoor-indoor transitions.",
        "skills": ["ROS", "Gazebo", "Swarm Robotics", "ESP32", "Mesh Networking", "MoCap", "RTK-GPS"]
    },
]

export const projectData = [
    {
        "heading": "Sequential Bayesian Optimization for Multimodal Robot Exploration",
        "subHead": "",
        "period": "February 2025",
        "imgLink": "/sbo.png",
        "info": "Outperformed POMCP baselines by 2.3× higher reward and 50% RMSE reduction using belief MDPs with Gaussian process uncertainty modeling. Engineered MCTS with Double Progressive Widening, reducing predictive variance by 36% via mutual information rewards. Implemented Python framework for Mars rovers with adaptive cost-aware policies and real-time belief updates.",
        "skills": ["Bayesian Optimization", "MCTS", "Gaussian Processes", "Python", "POMCP", "Belief MDPs"]
     },
     {
        "heading": "Enhanced Robotic Arm Trajectory Tracking via MPC and Deep RL",
        "subHead": "",
        "period": "February 2024",
        "imgLink": "/gru.avif",
        "info": "Developed GRU-based MPC for 7-DOF KUKA LBR4 manipulator, achieving test MSE of 0.0089 and outperforming baseline DNN by 44%. Implemented Linearized MPC strategy balancing computational tractability with tracking precision, reducing position MSE to 0.0753 rad². Deployed DDPG and Recurrent DDPG algorithms for Franka Panda robot, achieving exceptional tracking precision with MSE of 0.002 under partial observability.",
        "skills": ["GRU", "MPC", "Deep RL", "DDPG", "KUKA LBR4", "Franka Panda", "PyTorch", "Control Systems"]
     },
     {
        "heading": "Near-Future Vehicle Collision Prediction using Deep Learning on Dashcam Video Data",
        "subHead": "",
        "period": "March 2025",
        "imgLink": "/nexar.png",
        "info": "Developed multi-stream deep learning models for collision prediction using Nexar dashcam dataset, achieving AUROC of 0.816 with VideoMAEv2 transformer architecture. Implemented lightweight CollisionGNN with object-level explainability reaching AUROC of 0.731 for real-time deployment. Engineered CNN+GRU pipeline with MobileNetV2 backbone, demonstrating effective spatiotemporal feature learning with 0.671 AUROC on 1,500 annotated video clips.",
        "skills": ["Deep Learning", "Computer Vision", "VideoMAE", "Graph Neural Networks", "PyTorch", "TensorFlow", "YOLO", "MobileNetV2", "GRU"]
     },
    {
        "heading": "6D-Gauss: Camera 6D Pose Estimation from a Single RGB Image",
        "subHead": "",
        "period": "September 2024 - December 2024",
        "imgLink": "/splat.png",
        "info": "Developed 6DGS, a novel method for accurate and initialization-free camera pose estimation using a 3D Gaussian Splatting (3DGS) model and Radiant Ellicell ray casting. Leveraged DINOv2 for image feature extraction and an enhanced multi-head attention mechanism to align image and ray features. Integrated RANSAC for robust and accurate line intersection. Achieved significant improvement in translational (0.0609m) and angular errors (21.65°) compared to baseline methods.",
        "skills": ["3D Gaussian Splatting", "DINOv2", "Multi-Head Attention", "RANSAC", "Pose Estimation", "MLP", "Computer Vision"]
    },
    {
        "heading": "Pneumonia Detection Using ResNet-50",
        "subHead": "",
        "period": "September 2024 - November 2024",
        "imgLink": "/resnet.jpeg",
        "info": "Developed a deep learning model using ResNet-50 with transfer learning to classify chest X-rays as normal or pneumonia. Addressed class imbalance using focal loss and implemented data augmentation for robustness. Achieved a test accuracy of 76.20% and AUC of 85.49%, showcasing the potential for automated diagnosis in resource-constrained settings.",
        "skills": ["Deep Learning", "Transfer Learning", "ResNet-50", "Medical Imaging", "TensorFlow", "Data Augmentation"]
    },
    {
        "heading": "DRDO’s UAV-Guided UGV Navigation Challenge",
        "subHead": "Inter IIT Tech Meet 10.0, Kharagpur",
        "period": "February 2022 - March 2022",
        "imgLink": "/ugv.jpeg",
        "info": "Secured 2nd place among teams from 23 IITs for developing a UAV-guided UGV system optimized for autonomous navigation in snow-covered terrain. Implemented FSM architecture with Gazebo plugins for seamless UAV-UGV coordination in terrain mapping. Designed a visual odometry system using a UAV nadir camera, enabling real-time UGV position tracking.",
        "skills": ["FSM Architecture", "Gazebo", "Visual Odometry", "UAV-UGV Coordination", "Autonomous Navigation"]
    },
    {
        "heading": "Smart Pillow",
        "subHead": "",
        "period": "August 2022 - November 2022",
        "imgLink": "/smart.jpg",
        "info": "Developed an IoT-enabled smart pillow system integrating ECG and pressure sensors for sleep monitoring. Designed deep learning models for snoring detection with 98.3% accuracy and LSTM networks for real-time sleep apnea prediction. Implemented features like vibration-induced sleep, environmental monitoring, and real-time visualization via a web app.",
        "skills": ["IoT", "Deep Learning", "LSTM Networks", "ECG Analysis", "Web Development"]
    },
    {
        "heading": "Data-Driven Two-Wheel Self-Balancing Robot",
        "subHead": "",
        "period": "August 2022 - November 2022",
        "imgLink": "/tweel2.jpeg",
        "info": "Developed a data-driven control system enabling stable stair climbing for delivery robots. Designed a differential drive mechanism with tweels, reducing the robot's footprint by 37% for tight spaces. Led prototype development, optimizing navigation systems to handle 30-degree stair inclinations effectively.",
        "skills": ["Embedded Systems", "Control Systems", "Differential Drive", "Prototyping", "Navigation Systems"]
    },
    {
        "heading": "Delta Wing RC Plane",
        "subHead": "",
        "period": "January 2023 - May 2023",
        "imgLink": "/rc.jpeg",
        "info": "Conducted research on delta wing aerodynamics and flight dynamics. Led a collaborative effort in planning, task delegation, and material procurement. Designed and built a delta wing UAV, successfully completing tasks like structure shaping, control system installation, and test flights with continuous improvements.",
        "skills": ["Aerodynamics", "Flight Dynamics", "UAV Design", "Project Management", "Team Collaboration"]
    },

]
export const aboutMe = 'A passionate engineer with a knack for innovation and a love for creativity, both in technology and life.';
export const homePageData = [
    "👋 Hi, I'm Soumith Batta! I'm a Machine Learning Engineer with specialized expertise in computer vision and AI systems, currently pursuing my Master's in Robotics at the University of Minnesota-Twin Cities. I'm also working as a Computer Vision and AI/ML Intern at AddiGuru, where I focus on developing and optimizing foundational models for real-world applications.",
    "What truly excites me is the intersection of theoretical breakthroughs and practical implementation, particularly in multimodal understanding, uncertainty quantification, and model efficiency. I'm fascinated by how transformer architectures can be adapted for complex spatial reasoning tasks, and honestly, there's nothing quite like the satisfaction of solving those tricky problems that come up when you're trying to deploy sophisticated AI systems in the real world. I love working with teams to bridge that gap between cutting-edge research and solutions that actually work at scale, translating complex AI capabilities into systems that make a real difference.",
    "Outside of work, I'm all about finding creative outlets and staying active like photography, skateboarding, snowboarding, that kind of stuff. Lately, I've been diving into something completely new: teaching myself how to make music with code, which has been a fun way to blend my technical side with creativity."
];








export {NavbarItems}
