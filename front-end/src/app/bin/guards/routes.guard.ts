import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const guard = () => {

    const router = inject(Router)

    if(localStorage.getItem('uu0x0')){
        return true;
    }
    else{
        router.navigate(['/'])
        return false;
    }
}

export const guard_welcome = () => {
    const router = inject(Router)

    if(localStorage.getItem('g0x') === '1'){
        return true;
    }
    else{
        router.navigate(['/'])
        return false;
    }
}

export const guard_seller = () => {
    const router = inject(Router)

    if(localStorage.getItem('g1x') === '2'){
        return true;
    }
    else{
        router.navigate(['/notseller'])
        return false;
    }
}

export const guard_mobiles = () => {
    const router = inject(Router)

    const isMobileDevice = (): boolean => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
    };
  
    if(isMobileDevice()){
        router.navigate(['/mobile']);
        return false;
    }
    else{
        return true;
    }
}