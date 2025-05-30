import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./ContactForm.module.scss";

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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log("Форма отправлена:", data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_main}>
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

        <button
          type="submit"
          className={styles.form_main_submit_button}
          disabled={!isValid}
          title={!isValid ? "Заполните все обязательные поля" : ""}
        >
          Отправить
        </button>
      </div>
      <label className={styles.form_main_checkbox_label}>
        <input type="checkbox" {...register("agree")} />
        <span className={styles.form_main_checkbox_custom}></span>
        Отправить форму, соглашаясь на обработку персональных данных <br/> и
        политикой конфиденциальности.
        {errors.agree && (
          <span className={styles.error}>{errors.agree.message}</span>
        )}
      </label>
    </form>
  );
};
