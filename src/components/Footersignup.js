import React from 'react';

const Footersignup = () => {
    return (
        <>
        <div class="w-full bg-black text-white">

            <div class="w-full p-10 space-y-2">
            <div class="">Questions? Call 000-800-040-1843
            </div>

            <div class="flex flex-wrap w-full flex my-4">

                <div class="sm:w-1/4 w-1/2">

                <ul class="space-y-2">
                    <li>FAQ </li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>

                </ul>
                </div>
                <div class="sm:w-1/4 w-1/2">
                <ul  class="space-y-2">
                    <li class="">Help Centre </li>
                    <li class=""> Jobs</li>
                    <li class=""> Cookie Preferences</li>
                    <li class=""> Legal Notices</li>
                </ul>
                </div>
                <div class="sm:w-1/4 w-1/2">
                <ul  class="space-y-2">
                    <li class="">Account </li>
                    <li class="">Ways to Watch </li>
                    <li class="">Corporate Information </li>
                    <li class="">Netflix Originals </li>

                </ul>

                </div>
                <div class="sm:w-1/4 w-1/2">
                <ul  class="space-y-2">
                    <li class=""> Media Centre</li>
                    <li class="">Terms of Use </li>
                    <li class="">Contact Us </li>
                </ul>
                </div>

            </div>

            <div class=" space-y-4 pt-3" >
                
                <div class="">
                        <select class="bg-transparent rounded border border-white px-4 py-1  text-white" name="" id="cars">

                        <span class="text-black">
                            <option value="">English</option>
                            <option value="">Tiếng Việt</option>
                        </span>
                        </select>

                    </div>
                
                
                <div class="">Netflix</div>

            </div>
            </div>

        </div>
        </>
    );
};

export default Footersignup;