import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./ContactForm.module.scss";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";

emailjs.init("uXCSm84BQc-L3_tKE"); // Замените на ваш Public Key из EmailJS

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Некорректный номер телефона"),
  agree: z.boolean().refine((val) => val, "Необходимо согласие"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  onClose: () => void;
}


export const ContactFormMainPage: React.FC<ContactFormProps> = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      // Подготовка данных для EmailJS
      const templateParams = {
        name: data.name,
        phone: data.phone
      };

      // Отправка через EmailJS
      await emailjs.send(
        "service_1jw38vd", // Замените на ваш Service ID
        "template_qmfoyna", // Замените на ваш Template ID
        templateParams
      );

      console.log("Форма отправлена:", data);
      setIsSubmitted(true)
    } catch (error) {
      setIsSubmitted(false)
      console.error("Ошибка отправки:", error);
      alert("Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.");
    } finally {
      setIsLoading(false);
      onClose()
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form_main}>
          {isLoading ? (
            <div className={`${styles.loader} ${styles.loader_contact}`}>
              <div className={`${styles.spinner} ${styles.spinner_contact}`} />
              <span>Форма отправляется. Пожалуйста, подождите.</span>
            </div>
          ) : (
            <>
              <div className={styles.form_main_fields}>
                <div className={styles.form_main_field}>
                  <input {...register("name")} placeholder="Имя" />
                  {errors.name && (
                    <span className={styles.error}>{errors.name.message}</span>
                  )}
                </div>

                <div className={styles.form_main_field}>
                  <input {...register("phone")} placeholder="+7 (XXX) XXX-XX-XX" />
                  {errors.phone && (
                    <span className={styles.error}>{errors.phone.message}</span>
                  )}
                </div>
                <CustomButton
                  theme="primary"
                  size="s"
                  label={"Отправить"}
                  disabled={!isValid}
                  type="submit"
                ></CustomButton>

              </div>
              <label className={styles.form_main_checkbox_label}>
                <input type="checkbox" {...register("agree")} />
                <span className={styles.form_main_checkbox_custom}></span>
                Отправить форму, соглашаясь на обработку персональных данных <br /> и
                политикой конфиденциальности.
                {errors.agree && (
                  <span className={styles.error}>{errors.agree.message}</span>
                )}
              </label>
            </>
          )}
        </form>
      ) :
        <div className={`${styles.success} ${styles.contact_success}`}>
          <h2 className={`${styles.success_title} ${styles.success_title_contact}`}>Ваша заявка отправлена</h2>
          <p className={`${styles.success_text} ${styles.success_text_contact}`}>
            Мы свяжемся с вами в ближайшее время
          </p>
        </div>}
    </>

  );
};
