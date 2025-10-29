import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init({
    duration: 2000,
    disable: function () {
        // Disable AOS on screens smaller than 768px (mobile)
        return window.innerWidth < 768;
    }
});