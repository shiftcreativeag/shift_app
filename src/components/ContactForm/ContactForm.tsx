import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import styles from "./ContactForm.module.scss";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Некорректный номер телефона"),
  comment: z.string().optional(),
  services: z.array(z.string()).min(1, "Выберите хотя бы одну услугу"),
  agree: z.boolean().refine((val) => val, "Необходимо согласие"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  onClose: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      services: [],
    },
  });

  const selectedServices = watch("services") || [];

  const onSubmit = (data: FormData) => {
    console.log("Форма отправлена:", data);
    setIsSubmitted(true);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const serviceOptions = [
    "Брендинг",
    "Айдентика",
    "Интернет-магазин",
    "Сайт",
    "СММ",
    "Видео",
    "Лендинг",
  ];

  if (isSubmitted) {
    return (
      <div className={styles.modal_overlay} onClick={onClose}>
        <div
          className={styles.modal_content}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles.close_button}
            onClick={onClose}
            aria-label="Закрыть"
          >
            &times;
          </button>
          <div className={styles.success_сontainer}>
            <h2 className={styles.success_title}>Ваша заявка отправлена</h2>
            <p className={styles.success_text}>
              Наш менеджер свяжется с Вами для обсуждения проекта
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.form_container}>
          <button
            className={styles.close_button}
            onClick={onClose}
            aria-label="Закрыть"
          >
            &times;
          </button>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div>
              <h2 className={styles.form_title}>Оставьте заявку</h2>
              <p className={styles.form_subtitle}>
                Наш менеджер свяжется с Вами для обсуждения проекта
              </p>
              <div className={styles.service_options}>
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className={styles.checkbox_service_label}
                  >
                    <input
                      type="checkbox"
                      value={service}
                      {...register("services")}
                      checked={selectedServices.includes(service)}
                    />
                    <span className={styles.checkbox_service_custom}></span>
                    {service}
                  </label>
                ))}
                {errors.services && (
                  <span className={styles.error}>
                    {errors.services.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className={styles.field}>
                <input {...register("name")} placeholder="Имя" />
                {errors.name && (
                  <span className={styles.error}>{errors.name.message}</span>
                )}
              </div>

              <div className={styles.field}>
                <input
                  {...register("phone")}
                  placeholder="+7 (XXX) XXX-XX-XX"
                />
                {errors.phone && (
                  <span className={styles.error}>{errors.phone.message}</span>
                )}
              </div>

              <div className={styles.field}>
                <textarea
                  {...register("comment")}
                  placeholder="Дополнительная информация"
                  rows={3}
                />
              </div>

              <label className={styles.checkbox_label}>
                <input type="checkbox" {...register("agree")} />
                <span className={styles.checkbox_custom}></span>
                Отправить форму, соглашаясь на обработку персональных данных и
                политикой конфиденциальности.
                {errors.agree && (
                  <span className={styles.error}>{errors.agree.message}</span>
                )}
              </label>
              <button
                type="submit"
                className={styles.submit_button}
                disabled={!isValid}
                title={!isValid ? "Заполните все обязательные поля" : ""}
              >
                {isValid ? "Отправить" : "Заполните обязательные поля"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
