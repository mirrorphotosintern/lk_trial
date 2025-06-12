"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"
import { Users, FileText } from "lucide-react"

interface StatsCounterProps {
  totalUsers: number
  totalQuizzes: number
}

export default function StatsCounter({
  totalUsers,
  totalQuizzes
}: StatsCounterProps) {
  const usersCount = useMotionValue(0)
  const quizzesCount = useMotionValue(0)

  const usersDisplay = useTransform(usersCount, Math.round)
  const quizzesDisplay = useTransform(quizzesCount, Math.round)

  useEffect(() => {
    const usersAnimation = animate(usersCount, totalUsers, {
      duration: 2,
      ease: "easeOut"
    })

    const quizzesAnimation = animate(quizzesCount, totalQuizzes, {
      duration: 2,
      ease: "easeOut"
    })

    return () => {
      usersAnimation.stop()
      quizzesAnimation.stop()
    }
  }, [totalUsers, totalQuizzes, usersCount, quizzesCount])

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg bg-white p-6 shadow dark:bg-slate-950">
        <div className="flex items-center gap-2">
          <Users className="text-blue-500" size={24} />
          <h3 className="text-lg font-semibold">Total Users</h3>
        </div>
        <motion.div className="mt-2 text-3xl font-bold">
          {usersDisplay}
        </motion.div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow dark:bg-slate-950">
        <div className="flex items-center gap-2">
          <FileText className="text-green-500" size={24} />
          <h3 className="text-lg font-semibold">Total Quizzes</h3>
        </div>
        <motion.div className="mt-2 text-3xl font-bold">
          {quizzesDisplay}
        </motion.div>
      </div>
    </div>
  )
}
