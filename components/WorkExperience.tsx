import React from "react";
import { motion } from "framer-motion";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col h-screen max-w-full mx-auto overflow-hidden text-lft md:flex-row px10 justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="flex w-full p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <article className="flex flex-col rounded-lg items-center space-between space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-36 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
            src="https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png"
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Software Developer Fellow </h4>
            <p className="mt-1 text-2xl font-bold">General Assembly</p>
            <div className="flex my-2 space-x-2">
              {/* <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              /> */}
            </div>
            <p className="py-5 text-gray-300 uppercase">
              New York, New York (Remote)
            </p>

            <ul className="ml-5 space-y-4 text-lg list-dic">
              <li>
                Software engineering program, receiving professional training
                and working on a variety of web development projects.
              </li>
              <li>
                Included over 420+ hours of professional training over six
                months.
              </li>
              <li>
                Utilized a hands-on approach to practice user-centered design
                methods, design thinking skills, team collaboration, and client
                relations.
              </li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col rounded-lg items-center space-between space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-36 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="https://media-exp1.licdn.com/dms/image/C560BAQEGJo5v9k8ZDg/company-logo_200_200/0/1655671707143?e=2147483647&v=beta&t=UiiXIy95ZIrZbHXYLa4lt300Hu-b72lVrPvfABNY2bM"
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Associate Technician </h4>
            <p className="mt-1 text-2xl font-bold">
              Zixcorp Systems - OpenText
            </p>
            <div className="flex my-2 space-x-2">
              {/* <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              /> */}
            </div>
            <p className="py-5 text-gray-300 uppercase">
              Gulf Breeze, Florida (Remote)
            </p>

            <ul className="ml-5 space-y-4 text-lg list-dic">
              <li>
                Operated on the Encryption, Archive, and Backup team to resolve
                customer issues with products including advanced threat
                protection, email encryption, information archiving, email
                continuity, migration services, Hosted Exchange, and Microsoft
                Office 365 products.
              </li>
              <li>
                Educated customers on Office 365, mail protocols, DNS, TLS,
                device mail setup, OS, and common mail client services.
              </li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col rounded-lg items-center space-between space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-36 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="https://media-exp1.licdn.com/dms/image/C560BAQFEwXi4jS_uvA/company-logo_200_200/0/1519878570773?e=1672272000&v=beta&t=KpybtEamgnSD1FlPQClR6cIGeqp0al_eXcuKLFcJonY"
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Technical Support Agent </h4>
            <p className="mt-1 text-2xl font-bold">Mediacom</p>
            <div className="flex my-2 space-x-2">
              {/* <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              /> */}
            </div>
            <p className="py-5 text-gray-300 uppercase">
              Gulf Breeze, Florida (Remote)
            </p>

            <ul className="ml-5 space-y-4 text-lg list-dic">
              <li>
                Provide exceptional customer service while walking customers
                through hardware and software configurations to maximize product
                functionality.
              </li>
              <li>
                Educate customers on understanding of internet, networking, and
                email protocols.
              </li>
              <li>
                Troubleshoot and resolve technical issues for cable, internet,
                and phone services
              </li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col rounded-lg items-center space-between space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-36 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUATJf///8ASpYASJUAPZEAO5AARZQAQJIAOY8AQ5MAPpEAN47G0uMAQZIARJTP2uhri7mqu9RHcarm7fTa4u2xwdgwZaRhhLRhf7AXWZ7i5u/09vl9mcCGn8Tu8/i6yd0AMo2QpshUeq9JcaoWVZyluNM9aqaar80pXqDL1uYAL4twjrq/zeCUq8uKo8Z3lL4AKooAIocAG4VQA2I9AAAPFklEQVR4nO1daXuivtcmCwmLuIEritW6tlbn93z/D/eckwREtNOZ+be0eOV+MQVKmdwkOVtODo5jYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFh8eCg9Ltb8JVoB27QZuy7m/F1aM8XSZaSmfjuhnw+RODjD3dKEHP/u9vzuaCCs9lxGcGhv3xEhj4ft5DWGgQMdR6QoTeLFSvyipPP7eDhrP3drfpEBC1isJBw2p7h4fmRGLpxzjALnXyYPhRD9pwzJENUg27r0Rg6cp4zVPJFdJHhY+nDcGEYtgI4owEcjR+CIQsMDRpoNU9SiQZpsHgQhv62NZL6kK5NJ/ZxIorxYzD0t8BoZBS7WGmGOzRrKE8fgaHYKkoT40TwkzpNXDyRPbJqvHMhhrrTYte4gk9Hda7OWJ9sm86QTdLcjvHMJakU/0iNTp72G88wK7T8PDCXlLTpKdkjzvuGe/liRi7oG6Hij9So1Tc0nCAM0hLDNI/KuG/Gg3oEiO30QrGTT0Wv9UAGKfNmaUFxp4emQ6OMLILvbdgnIvI3BcVRpK+xPUn59zbrU8H3h5zi3igHv9t8TVgGC1fG+43zselu5o2316gsyRLBjW+4CM0Vv/FdSNeDmXdhQX3Ru1L8zQdqhGRbFid82Ckr/qYDpKUyzvwSHxaOwIhLncfQ9dKoiPTVKxES7hIUf/j+nzUIbqHnO/vgwpFKZ0F60Tc27LMgRiWDdCdLQ5W628MjjNNgUWJIsnFY0g1MPgBBJ0jJFVrrh6BVAo9JBSfvVktQ5kvOuRtEzdMgdL07VkjGz951NzIZ9JeDznSaHHdjxptm49CIc6d/WiQljgunJEQpHw7KQ/n47DaNox6EbrA99zp5tGZWSBzhXMkipVa2vJFzlTIhXbke7VpIc2pia3xU5afUittIighKRcRDZwWjVqcpzO8RhG5sN5aiAo5a5VnI2X2CII5oUyYjd2X73baK/nsEgaKss5n/AzpJb7alXnDXz/Wz9xmSg3fnL34cojfd2unitGKcR+KKp9z9hiCYBk3oRdkrj7vWbrR3YdTmAeH2bwleolU/GcGg2uq00zsPBUfjVLwjRy/j1P3u9n8Mubnf9vg4oY7X+YAhacB6lH9/psWtzZo67OrKPbqtn9+JfnUgxofN65aFPAKC2wuT/ZPn8XPF0SJNWLURr0Vj00Nv1hcleXrx/gdP3n615hG78bR+fjqfSrlIk978ee1xUP3lLikYpmEbg/09jznVXuz8/DUNth7T0JU+ux1uzGRjkN6LXtE/uv6NGd6AaNz75qUJpBKylOZgJMLqOB3+fGl6C0rbkXKAXWOzHf+bko4ek1FV9r42LKrBRBS4Ynju9XCtplCWI7c/1xNSVIfp8seLmhzKy/f2IxO0GahMqDzzi7QGRuSU8jI1dk2IGVMhebBenQZFpCZbaREp367pJG4hfXIMGrBARSfnzeHKSxrkIUPqXhsys3a0rDDsNcC/4Ml1m7O+MsW0f8HLFDsuDSs3k7cGjNLoeihu1NIFlXIS4gG/CM9WREV1kDZiJ43ZTqER6zghc1GMdj21BLXDRJv0sAod2r7x+RuRscgvPuJOx7OFowfjIPCpQyOPTiZtLhx2M0YJaUQ2UWG7JEO9fsiLsZie3Qg5U5iVNJhMbwjGDbDanKITlzpdgXrliZktJzyIfFCWzj1Xsgmi1DEzMZnoxgpWdXXjxe607N0OUMRzE6YhwJ+RuVlu4s+3bu77iH++j28gpDYvaXj6C35NcIArYO3Wx6xKSJu2BCWHvwtx38G5WV1Iw3dXYd5B0gxVkYOym4XQj9Cw3HZx/luCr80ao6AnPorhV7BpxNLTFdzXj2ldMGjWJNSQ/T/X9oOwWZPQQDgfrsUYvDU1U4GGfzYZR42x1m4hJ4cP+XXWTZOiV2Dh6r4bkSPrNnMKlsDc1fvTMZvLRrj1H4B5k93NQhri0PX8pnegAYv4cHm4Uh7Z8bx2GxBZ+3NQn3v78WzXA+zO43UYNDzR6y4YE5EERO0764sWFhYWFhYWFhYWjQAVUVN8rX8rz8r4uXf6eovdVxU6A1XDi+ofQcD0Cf6I1O9FgEkjLEA/QqUARUEQ8DyRJJJrRy3wM/U3NNL3MYdK9cAouOf2MydubcjxqxeJgw5WXAsJ7uilE0KwPAIhXeGwISEjhmWEjoET7UjapqruHABIBOjhxztdd1YlnGRbhqWUyJiZ0kOErMRE5dPwhBxuM6Moz9LQu/ebz4UL/ztXDKVimHgOVQzpUNVH4gcSew5vYcGrKkPc+QNjLNAbFuBmwzDfdbpi4RQeiNlvd+pKBDtyitj4i/ndMiR7dsUw2hDiOmFMBlIxnL2eZ1RtLD2cOyprDQnE43FrVPQhe309kLR7nlBMNlpHs3vp3pSqq1+/zH/D8E1eMcQ87yGLVG4TMlxHQmVCAeXwBSgyNXZXUuB0MgwdEQ5I9iKoylM5P7VwZFyY6Z9iTjq1hI1vGMZPVwyxeFIXK9HBNEMuE5OvgJ2KpaP2DK+ajIucIe5DSdXCjDclxydCTkWEWLb7DAWU91+HzH7Vkbd4wxColBnir3a46CTpLcMR3o0iqRW+wxBF1PYySGm7Rzow/RyTmNqpgWKVYUo28ooh3LB42pGY6xqejqu0h2Z4VjubvASGorzPEIfpwZTlA8iEvP5fAkPb2c5IvN/WsUhcZQgTKLhiKAdk+uuoakEhw+OxhXnN+TxMwSbBTtRlTm4ZOiqzPc/A5Avo7TDDvULugPSCWuJzVYYoNq4YgkRIQehjI422wIqlwPCIxaA32He4j1SVObnDEGVxvoUNX8VQrNU5PKCmrMUqwzF01xVDbPVEJ1Eiw6STYOa2KUNw0Pky4UbXN7vDEHcOTc1qsIRJGEZLrD2MAqym8PgNQ5VrX2KIOW1nLSvUPPSUrWYYmlr6FDexdcU9hlSmqEoVeIfMI56RZYQV/OrRFbcMR2GFoeOBcicpKrSKLO1fkrqwgGKH32UYpUUyO1hv2/BEpgF1+LG2bQqa4VNhl3bDQYVhcFTD8ZbhU3ZJCXKPJIs+YuifyOmVTNGO8dLa9peC3Tl9om2llBXDaFVhqNK8N1HOkKmRqRhutAyh4ER4IIPlRwydYNY5zND7gNmZ1ZWLgrt4xqDvUJQohgK3+pQZYolgvbcHGW73+71h6A6VLKXPrS1Wp00+HKVYCU2vT4G4qS21VpW0zHS2smaIW33KDFX6rBpSuW+hhf1Agq7LOEVpmZJ3Jc0VQ/1f+ihz6ts/66tmZ2hdaIaotV5LDFWdKBVsyHdbAsMgIwsJ8wpcSLpXztKJ61LtmuEi35ZHfVKpHMlWS69da1Kf78yWXVNOoN9Hh2bbX2PX9fEHNqm/Msp5vUX08doWLC64Be0uFvVfu2u9D0o9AA72221uim4rthnI5td5vZv2qPDz+rFM2VFay9HiwzGsfGRO1J1U30+ZMA8wF/CgYEUrtpmYpaQzeajV8Cr8Nm1cFaK/xGN/OMnC4h8gPTQ5XS/CTCe17cf1EMouZm4YYnE2qq+VaphxdS7UAwrrJHKZZ2K/+FtuBKZ6uH5uUIgYFob17C6Vxyxxwf7OdhHbZhkoPjdGZGj6+/0EjIGZoCLWF4ugIO9keA52DDwgD1u7GBk28YwUft0aqb20bpyhS+kmcOnYN/eicbCoxXDD6iySRuC5cwy7gCIOteECjTJ1LxaSCpPYVTD09C61s0ADzNRNMOV4lCFkaoIM0AfUrpkT6jixKVyLcbq4FuMbK3vsBbzQmIMTkYLmhpZ0lm9v0Ju4A3bXXcCrZm+nKYlPO6fEMD697bbswhAjw8fhVDsNwHCxS5Wxig80DA+nNN9yKXFrQy2FM3Hv9UriRgPKF+qtwivfhFEErkY7JYsnEWA7/KcDSV6iokXAEE5x62HBEL9N5siVpgAMz6Gjy2Jc+nDwotcNHPOttlqsb3zz51CFi8IODNXilaM1pyNNipZbigkahvq0YBjAHSF+UgcnHcMgObyyNCj34SAIdqbn1DA+1eHmo3eze8H9Wt2XTDm6YbEtMogv5dY/Zhiq8vNcrVVphhgOhm4v9WGAAga/mgRTPG3VVK4ehsviV0amZOnqbwBASzZPEstAYX2hvGj3HYYvfrvEEHsPXpCbqPsUQ/QSK33oCN3HIGimSzKtRdSAK5cAtx1ZTNTiBL7yZLMZqI294BqfgncYxvPlvDwPmV4rbKnwODLk0Kv4N+U+xIgQOsRyQBZjtVTw9YChlE1INiLJs3Z0jVRXS7pDtc55nyHBbz2V+hAm9FIz1KN0/tzR0Y+rPtT/Yle/OTXtocXllRE4bCQ9kwybCm1IsyxVXl00yot232GYkjgqMYQGn8oMlT70nCpDveYo4T99qWmLKQW1viEDHD26qagtfuUGGpopKsxyZx56uEX9wrCtZhic4uzSDOMX6lRGqadOUOBE/yVFrPhrGUqMRM2fYvhXydBCW6jfYmdheOyuLMX2X2QpwQbD8OuYebgxBYbKfYhrUdBxaNEkCci3WuLeanVoHOJOGDVowqtN9GjKoQr/WFt4CapTnqmOQY2/Nws35T5s68cVlfxq8YU5KsN1sCHGoDKvHP9vyaj6oNpHDJXQB/GYeRjeV/oO+vAJLDjXuepD/pSoIBzqlN1mQOr59oda/wrVx45UVFRnniDF9uCZI//1e6M0Z6gUCtp/3f822mZBhu5Jv7NSH7o9NVlxzs7D4H6OxucDPyI6dVX1Iz2ftLaAsQbqMEtNecffMURAP0PHkMQIJmToA4MFL/chYgo6EGOx6Kel9Yga9JFaAaozPe+N9wQWVaB2cCVaWyRXYsGL81NTnweTTNRny3R1YdSHAtfcnFwEmeceUWy152pgwMuppeYCdWYz0LziPBvrSOhIoQ+vWq6WbyO9CMpWo/Ka7eUUjhATPHSWm7M2U2h3NKRsOOpO1ANxuqnnTrT5sx3pxdfRqJawIm2rOsEirxbMBEKHev2iiDy7rj57OdW36yfB7Xm6DB4wfd3cy4QoIs/5lQePm9aEh4/OUiwP9Kf47sb+E9zbwke/wc+vt3oL9/d7eh+AYbQ5tP4YnfV3N/dfEPG/wHc31sLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwuKz8f9DVvb9yrWH+AAAAABJRU5ErkJggg=="
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">
              Argos Investment Program, Analyst
            </h4>
            <p className="mt-1 text-2xl font-bold">
              University of West Florida
            </p>
            <div className="flex my-2 space-x-2">
              {/* <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              /> */}
            </div>
            <p className="py-5 text-gray-300 uppercase">Pensacola, Florida</p>

            <ul className="ml-5 space-y-4 text-lg list-dic">
              <li>Bachelors of Science in Business Administration - Finance</li>
              <li>Equity Fund Management</li>
              <li>
                Performed extensive equity analysis to initiate high growth
                buy/sell/hold recommendations
              </li>
              <li>
                Managed $1.5 million AUM consisting of equity, fixed income, and
                derivatives
              </li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col rounded-lg items-center space-between space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-36 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="https://pbs.twimg.com/profile_images/903333253662228480/mJUkUOzW_400x400.jpg"
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Keyholder</h4>
            <p className="mt-1 text-2xl font-bold">ALDO Group</p>
            <div className="flex my-2 space-x-2">
              {/* <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              /> */}
            </div>
            <p className="py-5 text-gray-300 uppercase">
              New York, New York (Times Square and 34st.)
            </p>

            <ul className="ml-5 space-y-4 text-lg list-dic">
              <li>
                Provide ongoing support in training and communicates feedback
                from team members to store leadership.
              </li>
              <li>
                Maximize personal and store sales by promoting brand
                initiatives.
              </li>
              <li>
                Ensure the store is brand-aligned through flawless execution of
                visual presentation and marketing display.
              </li>
              <li>
                Ensure all team members comply with company policies and
                procedures.
              </li>
            </ul>
          </div>
        </article>

        <article className="flex flex-col rounded-lg items-center space-between space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-36 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="data:image/png;base64,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"
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Sales Lead Manager</h4>
            <p className="mt-1 text-2xl font-bold">Express</p>
            <div className="flex my-2 space-x-2">
              {/* <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                alt=""
              /> */}
            </div>
            <p className="py-5 text-gray-300 uppercase">Pensacola, Florida</p>

            <ul className="ml-5 space-y-4 text-lg list-dic">
              <li>Responsible for opening and closing stores.</li>
              <li>
                Develops, coaches, and motivates sales associates to provide an
                exceptional customer experience.
              </li>
              <li>
                Responsible for leading sales floor coverage while maintaining a
                selling focus in the absence of store management.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
