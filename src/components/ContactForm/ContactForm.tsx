import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.scss";
import { CustomButton } from "../CustomButton/CustomButton";

// Инициализация EmailJS (вынесите в отдельный конфиг при необходимости)
emailjs.init("uXCSm84BQc-L3_tKE"); // Замените на ваш Public Key из EmailJS

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Некорректный номер телефона"),
  comment: z.string().optional(),
  services: z.array(z.string()).min(0, "Выберите хотя бы одну услугу"),
  agree: z.boolean().refine((val) => val, "Необходимо согласие"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  onClose: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      // Подготовка данных для EmailJS
      const templateParams = {
        name: data.name,
        phone: data.phone,
        comment: data.comment || "Не указано",
        services: data.services.join(", ")
      };

      // Отправка через EmailJS
      await emailjs.send(
        "service_1jw38vd", // Замените на ваш Service ID
        "template_qmfoyna", // Замените на ваш Template ID
        templateParams
      );

      console.log("Форма отправлена:", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
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
    "Сайт",
    "Интернет-магазин",
    "СММ",
    "SEO-оптимизация",
    "Видео",
    "Аудит безопасности",
    "Лендинг",
    "Полиграфия"
  ];

  const [width, setWidth] = useState(window.innerWidth); const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          </button>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form_left}>
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
              </div>
              {errors.services && (
                <span className={styles.error}>
                  {errors.services.message}
                </span>
              )}
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

              <div className={styles.field}>
                <label className={styles.checkbox_label}>
                  <input type="checkbox" {...register("agree")} />
                  <span className={styles.checkbox_custom}></span>
                  Отправить форму, соглашаясь на обработку персональных данных и Политикой конфиденциальности.

                </label>
                {errors.agree && (
                  <span className={styles.error}>{errors.agree.message}</span>
                )}
              </div>

              {isLoading ? (
                <div className={styles.loader}>
                  <div className={styles.spinner} />
                  <span>Форма отправляется. Пожалуйста, подождите.</span>
                </div>

              ) : (
                <CustomButton
                  theme="primary"
                  size={
                    width > 1024 ? "l" :
                      width > 768 ? "m" :
                        "s"
                  }
                  width="max"
                  label={"Отправить"}
                  disabled={!isValid}
                  type="submit"
                ></CustomButton>
              )}

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
