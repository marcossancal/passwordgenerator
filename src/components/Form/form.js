import './form.css';

function PasswordProtector() {
    let pass_field = document.querySelector("#password"); 
    let pass_field_g = document.querySelector("#password_generated"); 
    let password = document.querySelector("#password").value;
    let maiuscula = document.querySelector("#maiusculas");
    let car_esp = document.querySelector("#car_esp");
    let sec_password = '';
    let char;
    let passstp = '';
    let special_chars = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '[', ']', '/', ';'];
    let qtd_char = password.length;
    let i;
    let n;

    if (car_esp.checked) {
        for (i = 0; i < qtd_char; i++){
            n = Math.random();
            if (n > 0.3) { 
                char = password[i] + special_chars[Math.floor(Math.random() * special_chars.length)];
                passstp += char;
            } else {
                passstp += password[i];
            }
        }
    } else {
        passstp = password;
    }
    if (maiuscula.checked) {
        if (!car_esp.checked) {
            for (i = 0; i < qtd_char; i++) {
                n = Math.random();
                if (n > 0.5) {
                    sec_password += password[i];
                } else {
                    sec_password += password[i].toUpperCase();
                }
            }
        } else {
            for (i = 0; i < passstp.length; i++) {
                n = Math.random();
                if (n > 0.5) {
                    sec_password += passstp[i];
                } else {
                    sec_password += passstp[i].toUpperCase();
                }
            }
        }
    }
    if (sec_password != '') {
        document.querySelector("#senha_gerada").style.display = "block";
        pass_field_g.value = sec_password;
    }
    if (!(maiuscula.checked)) {
        document.querySelector("#senha_gerada").style.display = "block";
        pass_field_g.value = passstp;
    }
}

function Form() {
  return (
      <div className="Form">
        <h2 className="title">Torne sua senha mais forte!</h2>
            <label htmlFor="">Digite uma senha</label> 
            <input type="text" name="password" id="password" />
            <div id="senha_gerada">
                <label htmlFor="">Senha Gerada</label> 
                <input type="text" name="password" id="password_generated" />              
            </div>
            <label htmlFor=""><input type="checkbox" name="maiusculas" id="maiusculas" />Maiúsculas aleatórias</label>
            <label htmlFor=""><input type="checkbox" name="car_esp" id="car_esp" />Caracteres Especiais</label>
            <input type="submit" className="submit" value="Fortalecer Senha!" onClick={PasswordProtector} />
    </div>
  );
}

export default Form;